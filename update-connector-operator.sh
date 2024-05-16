#!/bin/bash

echo "Installing compogen..."
cd component && go install component/tools/compogen@latest

echo "Cloning the repository..."
git clone https://github.com/instill-ai/component component

echo "Running go generate..."

# Define a function to map component_name to the target directory
map_component_to_directory() {
    # echo "1:  $1"
    case $1 in
    instill | archetypeai | huggingface | openai | stabilityai)
        echo "ai"
        ;;
    googlecloudstorage | googlesearch | bigquery | pinecone | redis | restapi | website)
        echo "data"
        ;;
    numbers | slack)
        echo "app"
        ;;
    base64 | image | json | text)
        echo "operators"
        ;;
    *)
        echo >&2 "Invalid choice: $1"
        exit 1
        ;;
    esac
}

# Generate components
go generate -run compogen ./component/...

# Iterate over README files
for doc in $(find component -name README.mdx); do
    component_name=$(echo "${doc}" | cut -d'/' -f 4)
    target_directory=$(map_component_to_directory "${component_name}")
    if [[ "${target_directory}" != "unknown" ]]; then
        target_en=docs/component/${target_directory}/${component_name}.en.mdx
        target_cn=docs/component/${target_directory}/${component_name}.zh_CN.mdx
        cp "${doc}" "${target_en}"
        cp "${doc}" "${target_cn}"
    else
        echo "Unknown component type for ${doc}"
    fi
done

# remove component folder
rm -rf component
