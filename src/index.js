const express = require('express');
const app = express();
const port = 8080;
var elasticsearch = require ('elasticsearch');
var client = new elasticsearch.Client({
    host: 'elasticsearch:9200 '
});  

app.get('/', (req, res) => {
    res.send('arigato')
  })

app.get('/search', async (req, res) => {
     let q = req.query.q;
    // Let's search
const result = await client.search({
    index: 'work_index_1',
    type: '_doc',
    q: q,
    size: 10
}).then(function(resp) {
    return res.status(200).json({
     hits: resp
})
}, function(err) {
    console.trace(err.message);
});
  })


app.listen(port, () => {
    console.log(` listening on port ${port}`)
  })