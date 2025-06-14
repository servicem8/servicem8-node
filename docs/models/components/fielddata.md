# FieldData

Configuration data for the field

## Example Usage

```typescript
import { FieldData } from "servicem8/models/components";

let value: FieldData = {
  fieldType: "Date",
  mandatory: true,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `fieldType`                                                                              | [components.AssetTypeFieldFieldType](../../models/components/assettypefieldfieldtype.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `mandatory`                                                                              | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `choices`                                                                                | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |