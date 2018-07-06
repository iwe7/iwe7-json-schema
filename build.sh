#!/usr/bin/env bash
ng build --project iwe7-widgets
cp -fr projects/iwe7-widgets/src/widget.json dist/iwe7-widgets/
cd dist/iwe7-widgets
npm publish
cd ../
yarn add iwe7-widgets
