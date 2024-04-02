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

# Function to process each component type (connector or operator)

# <----- OPERATOR ------->

process_component_type() {
    local component_type=$1
    local lang=$2

    # Find all config directories for the given component type
    local component_dirs=$(find component/pkg/${component_type} -type d -name "config")

    for component_dir in $component_dirs; do
        local component_name=$(basename $(dirname $(dirname ${component_dir})))

        # Generate README and copy files for English
        echo compogen readme ${component_dir} component/pkg/${component_type}/${component_name}/v0/${component_name}.$lang.mdx --${component_type}
        compogen readme ${component_dir} component/pkg/${component_type}/${component_name}/v0/${component_name}.$lang.mdx --${component_type}
        echo cp component/pkg/${component_type}/${component_name}/v0/${component_name}.$lang.mdx docs/vdp/${component_type}s/${component_name}.$lang.mdx
        cp component/pkg/${component_type}/${component_name}/v0/${component_name}.$lang.mdx docs/vdp/${component_type}s/${component_name}.$lang.mdx
    done
}

# Process operators for English and Chinese
process_component_type "operator" "en"
process_component_type "operator" "zh_CN"

# <----- CONNECTOR ------>

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


# remove component folder
rm -rf component