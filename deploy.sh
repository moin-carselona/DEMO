#!/bin/bash

DEPLOY_SERVER=$DEPLOY_SERVER
SERVER_FOLDER="reactcar"

# Building React output
yarn install
yarn run build

echo "Deploying to ${DEPLOY_SERVER}"
scp -r build/ root@${DEPLOY_SERVER}:/home/${SERVER_FOLDER}/public_html

echo "Finished copying the build files"