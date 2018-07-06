#!/usr/bin/env bash
rm -rf ./src/json/widgets/*
mkdir ./src/json/widgets/
find ./src/app/widgets -name "*.json" -exec cp -rf {} ./src/json/widgets/ \;
