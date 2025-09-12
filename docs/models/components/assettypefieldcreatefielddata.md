# AssetTypeFieldCreateFieldData

Configuration data for the field

## Example Usage

```typescript
import { AssetTypeFieldCreateFieldData } from "servicem8/models/components";

let value: AssetTypeFieldCreateFieldData = {
  fieldType: "Text",
  mandatory: false,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `fieldType`                                                                                          | [components.AssetTypeFieldCreateFieldType](../../models/components/assettypefieldcreatefieldtype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `mandatory`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `choices`                                                                                            | *string*[]                                                                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |