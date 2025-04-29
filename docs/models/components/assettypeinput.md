# AssetTypeInput

## Example Usage

```typescript
import { AssetTypeInput } from "servicem8/models/components";

let value: AssetTypeInput = {
  uuid: "123e4567-6e2a-4bdd-a391-22b4d692c17b",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Record UUID key                                                          | 123e4567-6e2a-4bdd-a391-22b4d692c17b                                     |
| `active`                                                                 | [components.AssetTypeActive](../../models/components/assettypeactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag. <br/><br/>Valid values are [0,1]             |                                                                          |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |