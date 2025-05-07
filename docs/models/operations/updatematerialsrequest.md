# UpdateMaterialsRequest

## Example Usage

```typescript
import { UpdateMaterialsRequest } from "servicem8/models/operations";

let value: UpdateMaterialsRequest = {
  uuid: "14470a98-4d9c-4418-9714-612ef5934cd0",
  material: {
    name: "<value>",
    uuid: "123e4567-b690-40f1-88e1-22bb0d609a2b",
    taxRateUuid: "123e4567-b134-4983-821d-22bb06eab9eb",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Material                                                 |
| `material`                                                           | [components.MaterialInput](../../models/components/materialinput.md) | :heavy_check_mark:                                                   | Material fields to update                                            |