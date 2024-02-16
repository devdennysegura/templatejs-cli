#!/bin/bash
npx ts-node ./node_modules/typeorm/cli.js migration:show -d ./src/database/utils/typeorm_cli_datasource.ts 
