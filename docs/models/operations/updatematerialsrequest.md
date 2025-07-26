# UpdateMaterialsRequest

## Example Usage

```typescript
import { UpdateMaterialsRequest } from "servicem8/models/operations";

let value: UpdateMaterialsRequest = {
  uuid: "14470a98-4d9c-4418-9714-612ef5934cd0",
  material: {
    name: "<value>",
    uuid: "123e4567-455d-40aa-96e6-230c470527ab",
    taxRateUuid: "123e4567-d9f7-4460-be62-230c446869cb",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Material                                                 |
| `material`                                                           | [components.MaterialInput](../../models/components/materialinput.md) | :heavy_check_mark:                                                   | Material fields to update                                            |