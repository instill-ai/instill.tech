#!/bin/bash

echo "Installing compogen..."
cd component && go install component/tools/compogen@latest

echo "Cloning the repository..."
git clone https://github.com/instill-ai/component component

# Remove README.mdx files
echo "Removing README.mdx files..."
find component/pkg/operator -name README.mdx -type f -exec rm {} \; -print
find component/pkg/connector -name README.mdx -type f -exec rm {} \; -print

echo "Running go generate..."
# cd component && go generate ./...

# operator

compogen readme component/pkg/operator/base64/v0/config/ component/pkg/operator/base64/v0/base64.en.mdx --operator
cp component/pkg/operator/base64/v0/base64.en.mdx docs/vdp/operators/base64.en.mdx
compogen readme component/pkg/operator/base64/v0/config/ component/pkg/operator/base64/v0/base64.zh_CN.mdx --operator
cp component/pkg/operator/base64/v0/base64.zh_CN.mdx docs/vdp/operators/base64.zh_CN.mdx

# compogen readme component/pkg/operator/end/v0/config/ component/pkg/operator/end/v0/end.en.mdx --operator
# cp component/pkg/operator/end/v0/end.en.mdx docs/vdp/operators/end.en.mdx
# compogen readme component/pkg/operator/end/v0/config/ component/pkg/operator/end/v0/end.zh_CN.mdx --operator
# cp component/pkg/operator/end/v0/end.zh_CN.mdx docs/vdp/operators/end.zh_CN.mdx


# compogen readme component/pkg/operator/image/v0/config/ component/pkg/operator/image/v0/image.em.mdx --operator
# cp component/pkg/operator/image/v0/image.en.mdx docs/vdp/operators/image.en.mdx
# compogen readme component/pkg/operator/image/v0/config/ component/pkg/operator/image/v0/image.zh_CN.mdx --operator
# cp component/pkg/operator/image/v0/image.zh_CN.mdx docs/vdp/operators/image.zh_CN.mdx

compogen readme component/pkg/operator/json/v0/config/ component/pkg/operator/json/v0/json.en.mdx --operator
cp component/pkg/operator/json/v0/json.en.mdx docs/vdp/operators/json.en.mdx
compogen readme component/pkg/operator/json/v0/config/ component/pkg/operator/json/v0/json.zh_CN.mdx --operator
cp component/pkg/operator/json/v0/json.zh_CN.mdx docs/vdp/operators/json.zh_CN.mdx

# compogen readme component/pkg/operator/start/v0/config/ component/pkg/operator/start/v0/start.en.mdx --operator
# cp component/pkg/operator/start/v0/start.en.mdx docs/vdp/operators/start.en.mdx
# compogen readme component/pkg/operator/start/v0/config/ component/pkg/operator/start/v0/start.zh_CN.mdx --operator
# cp component/pkg/operator/start/v0/start.zh_CN.mdx docs/vdp/operators/start.zh_CN.mdx

compogen readme component/pkg/operator/text/v0/config/ component/pkg/operator/text/v0/text.en.mdx --operator
cp component/pkg/operator/text/v0/text.en.mdx docs/vdp/operators/text.en.mdx
compogen readme component/pkg/operator/text/v0/config/ component/pkg/operator/text/v0/text.zh_CN.mdx --operator
cp component/pkg/operator/text/v0/text.zh_CN.mdx docs/vdp/operators/text.zh_CN.mdx

# connector

# compogen readme component/pkg/connector/airbyte/v0/config/ component/pkg/connector/airbyte/v0/airbyte.en.mdx --connector
# cp component/pkg/operator/airbyte/v0/airbyte.en.mdx docs/vdp/operators/airbyte.en.mdx
# compogen readme component/pkg/connector/airbyte/v0/config/ component/pkg/connector/airbyte/v0/airbyte.zh_CN.mdx --connector
# cp component/pkg/operator/airbyte/v0/airbyte.zh_CN.mdx docs/vdp/operators/airbyte.zh_CN.mdx

compogen readme component/pkg/connector/archetypeai/v0/config/ component/pkg/connector/archetypeai/v0/archetype-ai.en.mdx --connector
cp component/pkg/connector/archetypeai/v0/archetype-ai.en.mdx docs/vdp/ai-connectors/archetype-ai.en.mdx
compogen readme component/pkg/connector/archetypeai/v0/config/ component/pkg/connector/archetypeai/v0/archetype-ai.zh_CN.mdx --connector
cp component/pkg/connector/archetypeai/v0/archetype-ai.zh_CN.mdx docs/vdp/ai-connectors/archetype-ai.zh_CN.mdx

# compogen readme component/pkg/connector/bigquery/v0/config/ component/pkg/connector/bigquery/v0/bigquery.en.mdx --connector
# cp component/pkg/operator/bigquery/v0/bigquery.en.mdx docs/vdp/operators/bigquery.en.mdx
# compogen readme component/pkg/connector/bigquery/v0/config/ component/pkg/connector/bigquery/v0/bigquery.zh_CN.mdx --connector
# cp component/pkg/connector/bigquery/v0/bigquery.zh_CN.mdx docs/vdp/ai-connectors/bigquery.zh_CN.mdx

compogen readme component/pkg/connector/googlecloudstorage/v0/config/ component/pkg/connector/googlecloudstorage/v0/gcs.en.mdx --connector
cp component/pkg/connector/googlecloudstorage/v0/gcs.en.mdx docs/vdp/data-connectors/gcs.en.mdx
compogen readme component/pkg/connector/googlecloudstorage/v0/config/ component/pkg/connector/googlecloudstorage/v0/gcs.zh_CN.mdx --connector
cp component/pkg/connector/googlecloudstorage/v0/gcs.zh_CN.mdx docs/vdp/data-connectors/gcs.zh_CN.mdx


compogen readme component/pkg/connector/googlesearch/v0/config/ component/pkg/connector/googlesearch/v0/google-search.en.mdx --connector
cp component/pkg/connector/googlesearch/v0/google-search.en.mdx docs/vdp/data-connectors/google-search.en.mdx
compogen readme component/pkg/connector/googlesearch/v0/config/ component/pkg/connector/googlesearch/v0/google-search.zh_CN.mdx --connector
cp component/pkg/connector/googlesearch/v0/google-search.zh_CN.mdx docs/vdp/data-connectors/google-search.zh_CN.mdx

# compogen readme component/pkg/connector/huggingface/v0/config/ component/pkg/connector/huggingface/v0/huggingface.en.mdx --connector
# cp component/pkg/connector/googlecloudstorage/v0/huggingface.en.mdx docs/vdp/data-connectors/huggingface.en.mdx
# compogen readme component/pkg/connector/huggingface/v0/config/ component/pkg/connector/huggingface/v0/huggingface.zh_CN.mdx --connector
# cp component/pkg/connector/googlesearch/v0/huggingface.zh_CN.mdx docs/vdp/data-connectors/huggingface.zh_CN.mdx

# compogen readme component/pkg/connector/instill/v0/config/ component/pkg/connector/instill/v0/instill.en.mdx --connector
# cp component/pkg/connector/instill/v0/huggingface.en.mdx docs/vdp/data-connectors/instill.en.mdx
# compogen readme component/pkg/connector/instill/v0/config/ component/pkg/connector/instill/v0/instill.zh_CN.mdx --connector
# cp component/pkg/connector/instill/v0/instill.zh_CN.mdx docs/vdp/data-connectors/instill.zh_CN.mdx

# compogen readme component/pkg/connector/numbers/v0/config/ component/pkg/connector/numbers/v0/numbers.en.mdx --connector
# cp component/pkg/connector/instill/v0/numbers.en.mdx docs/vdp/data-connectors/instill.en.mdx
# compogen readme component/pkg/connector/numbers/v0/config/ component/pkg/connector/numbers/v0/numbers.zh_CN.mdx --connector
# cp component/pkg/connector/instill/v0/instill.zh_CN.mdx docs/vdp/data-connectors/instill.zh_CN.mdx

# compogen readme component/pkg/connector/openai/v0/config/ component/pkg/connector/openai/v0/openai.en.mdx --connector
# cp component/pkg/connector/instill/v0/openai.en.mdx docs/vdp/data-connectors/openai.en.mdx
# compogen readme component/pkg/connector/openai/v0/config/ component/pkg/connector/openai/v0/openai.zh_CN.mdx --connector
# cp component/pkg/connector/openai/v0/openai.zh_CN.mdx docs/vdp/data-connectors/openai.zh_CN.mdx

compogen readme component/pkg/connector/pinecone/v0/config/ component/pkg/connector/pinecone/v0/pinecone.en.mdx --connector
cp component/pkg/connector/pinecone/v0/pinecone.en.mdx docs/vdp/data-connectors/pinecone.en.mdx
compogen readme component/pkg/connector/pinecone/v0/config/ component/pkg/connector/pinecone/v0/pinecone.zh_CN.mdx --connector
cp component/pkg/connector/pinecone/v0/pinecone.zh_CN.mdx docs/vdp/data-connectors/pinecone.zh_CN.mdx

# compogen readme component/pkg/connector/redis/v0/config/ component/pkg/connector/redis/v0/redis.en.mdx --connector
# cp component/pkg/connector/redis/v0/redis.en.mdx docs/vdp/data-connectors/redis.en.mdx
# compogen readme component/pkg/connector/redis/v0/config/ component/pkg/connector/redis/v0/redis.zh_CN.mdx --connector
# cp component/pkg/connector/redis/v0/redis.zh_CN.mdx docs/vdp/data-connectors/redis.zh_CN.mdx

# compogen readme component/pkg/connector/restapi/v0/config/ component/pkg/connector/restapi/v0/restapi.en.mdx --connector
# cp component/pkg/connector/restapi/v0/restapi.en.mdx docs/vdp/data-connectors/restapi.en.mdx
# compogen readme component/pkg/connector/restapi/v0/config/ component/pkg/connector/restapi/v0/restapi.zh_CN.mdx --connector
# cp component/pkg/connector/restapi/v0/restapi.zh_CN.mdx docs/vdp/data-connectors/restapi.zh_CN.mdx

# compogen readme component/pkg/connector/stabilityai/v0/config/ component/pkg/connector/stabilityai/v0/stabilityai.en.mdx --connector
# cp component/pkg/connector/stabilityai/v0/stabilityai.en.mdx docs/vdp/data-connectors/stabilityai.en.mdx
# compogen readme component/pkg/connector/stabilityai/v0/config/ component/pkg/connector/stabilityai/v0/stabilityai.zh_CN.mdx --connector
# cp component/pkg/connector/stabilityai/v0/stabilityai.zh_CN.mdx docs/vdp/data-connectors/stabilityai.zh_CN.mdx

# remome component folder
rm -rf component