#!/bin/bash
MIGRATION_NAME=$1
npx ts-node ./node_modules/typeorm/cli.js migration:generate ./src/database/migrations/$MIGRATION_NAME -d ./src/database/utils/typeorm_cli_datasource.ts 
