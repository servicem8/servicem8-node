# UpdateMaterialsRequest

## Example Usage

```typescript
import { UpdateMaterialsRequest } from "servicem8/models/operations";

let value: UpdateMaterialsRequest = {
  uuid: "14470a98-4d9c-4418-9714-612ef5934cd0",
  materialCreate: {
    name: "<value>",
    uuid: "123e4567-ca70-4f1a-95bf-233c682e7bcb",
    taxRateUuid: "123e4567-ae27-4329-81a8-233c6c0a814b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Material                                                   |
| `materialCreate`                                                       | [components.MaterialCreate](../../models/components/materialcreate.md) | :heavy_check_mark:                                                     | Material fields to update                                              |