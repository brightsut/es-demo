#!/usr/bin/env bash

set -x

node_modules/elasticdump/bin/elasticdump \
  --input=elasticsearch-data/es_setting.json \
  --output=http://elastic:changeme@elasticsearch:9200/work_index_1 \
  --type=settings

node_modules/elasticdump/bin/elasticdump \
  --input=elasticsearch-data/es_mapping.json \
  --output=http://elastic:changeme@elasticsearch:9200/work_index_1 \
  --type=mapping


node_modules/.bin/elasticdump \
  --input=elasticsearch-data/es_index.json \
  --output=http://elastic:changeme@elasticsearch:9200/work_index_1 \
  --type=data

