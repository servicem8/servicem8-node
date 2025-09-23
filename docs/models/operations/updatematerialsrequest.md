# UpdateMaterialsRequest

## Example Usage

```typescript
import { UpdateMaterialsRequest } from "servicem8/models/operations";

let value: UpdateMaterialsRequest = {
  uuid: "14470a98-4d9c-4418-9714-612ef5934cd0",
  materialCreate: {
    name: "<value>",
    uuid: "123e4567-7e5f-42ea-a762-23467a67b86b",
    taxRateUuid: "123e4567-02a2-4661-a085-23467a08388b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Material                                                   |
| `materialCreate`                                                       | [components.MaterialCreate](../../models/components/materialcreate.md) | :heavy_check_mark:                                                     | Material fields to update                                              |