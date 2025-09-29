# UpdateMaterialsRequest

## Example Usage

```typescript
import { UpdateMaterialsRequest } from "servicem8/models/operations";

let value: UpdateMaterialsRequest = {
  uuid: "14470a98-4d9c-4418-9714-612ef5934cd0",
  materialCreate: {
    name: "<value>",
    uuid: "123e4567-7742-4dcd-91e2-23497f16366b",
    taxRateUuid: "123e4567-afde-4856-b38e-23497e24400b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Material                                                   |
| `materialCreate`                                                       | [components.MaterialCreate](../../models/components/materialcreate.md) | :heavy_check_mark:                                                     | Material fields to update                                              |