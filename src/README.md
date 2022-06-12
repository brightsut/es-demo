### Elasticsearch Node.js demo

Starting the demo

This repository includes a Docker Compose file to reproduce the environment locally.

Execute the following commands to start and create the index with sample data:
docker-compose up
docker exec <containerID 0f src_nodejs> /usr/src/app/elasticsearch-data/load-data.sh

Finally, open http://localhost:8080/search in a browser to see the search page.

example:
http://localhost:8080/search?q=หาดใหญ่
