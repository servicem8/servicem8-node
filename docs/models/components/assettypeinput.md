# AssetTypeInput

## Example Usage

```typescript
import { AssetTypeInput } from "servicem8/models/components";

let value: AssetTypeInput = {
  uuid: "123e4567-a2dd-4ae2-b557-22b5662cc78b",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | Record UUID key                                                          | 123e4567-a2dd-4ae2-b557-22b5662cc78b                                     |
| `active`                                                                 | [components.AssetTypeActive](../../models/components/assettypeactive.md) | :heavy_minus_sign:                                                       | Record active/deleted flag. <br/><br/>Valid values are [0,1]             |                                                                          |
| `name`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |