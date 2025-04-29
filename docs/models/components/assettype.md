# AssetType

## Example Usage

```typescript
import { AssetType } from "servicem8/models/components";

let value: AssetType = {
  uuid: "123e4567-0b38-4050-8e20-22b4d2316fdb",
  editDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Record UUID key                                                          | 123e4567-0b38-4050-8e20-22b4d2316fdb                                     |
| `active`                                                                 | [components.AssetTypeActive](../../models/components/assettypeactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag. <br/><br/>Valid values are [0,1]             |                                                                          |
| `editDate`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | Record last modified timestamp                                           | YYYY-MM-DD HH:MM:SS                                                      |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |