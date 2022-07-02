#/bin/bash

rm -rf src.old
mkdir src.old
cp -r src/api-base src.old/api-base

#Perform destructive changes on the original code base