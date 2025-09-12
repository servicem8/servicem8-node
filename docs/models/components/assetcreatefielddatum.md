# AssetCreateFieldDatum

## Example Usage

```typescript
import { AssetCreateFieldDatum } from "servicem8/models/components";

let value: AssetCreateFieldDatum = {
  uuid: "e1f8f9d5-4670-416e-8585-398c0781d919",
  fieldType: "<value>",
  fieldName: "<value>",
  fieldValue: "<value>",
  sortOrder: 6024.29,
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