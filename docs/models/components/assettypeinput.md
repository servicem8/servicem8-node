# AssetTypeInput

## Example Usage

```typescript
import { AssetTypeInput } from "servicem8/models/components";

let value: AssetTypeInput = {
  uuid: "123e4567-0b38-4050-8e20-22b4d2316fdb",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Record UUID key                                                          | 123e4567-0b38-4050-8e20-22b4d2316fdb                                     |
| `active`                                                                 | [components.AssetTypeActive](../../models/components/assettypeactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag. <br/><br/>Valid values are [0,1]             |                                                                          |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |