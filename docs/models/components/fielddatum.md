# FieldDatum

## Example Usage

```typescript
import { FieldDatum } from "servicem8/models/components";

let value: FieldDatum = {
  uuid: "e6f5305e-76b0-4e99-8ebb-36586d0c1340",
  fieldType: "<value>",
  fieldName: "<value>",
  fieldValue: "<value>",
  sortOrder: 4258.88,
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