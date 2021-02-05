## create ddb table for quotes via aws cli

```
aws dynamodb create-table \
--table-name Quotes \
--attribute-definitions \
AttributeName=Quote,AttributeType=S \
AttributeName=Author,AttributeType=S \
--key-schema \
AttributeName=Quote,KeyType=HASH \
AttributeName=Author,KeyType=RANGE \
--provisioned-throughput \
ReadCapacityUnits=1,WriteCapacityUnits=1 \
--region ca-central-1
```

## write quotes to ddb table

```
aws dynamodb batch-write-item --request-items file://quotes.json
```

## get an item

```
aws dynamodb get-item --table-name Quotes --key file://key.json
```