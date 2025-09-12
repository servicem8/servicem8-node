# AssetFieldDatum

## Example Usage

```typescript
import { AssetFieldDatum } from "servicem8/models/components";

let value: AssetFieldDatum = {
  uuid: "0f7a0fb1-649f-4750-94ec-5907c157b3f6",
  fieldType: "<value>",
  fieldName: "<value>",
  fieldValue: "<value>",
  sortOrder: 2392.41,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `uuid`                                                        | *string*                                                      | :heavy_check_mark:                                            | Must be the UUID of an AssetTypeField                         |
| `fieldType`                                                   | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `fieldName`                                                   | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `fieldValue`                                                  | *string*                                                      | :heavy_check_mark:                                            | Convert all values to string. Dates shall be in Y-m-d format. |
| `sortOrder`                                                   | *number*                                                      | :heavy_check_mark:                                            | N/A                                                           |