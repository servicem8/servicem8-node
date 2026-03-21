# UpdateMaterialsRequest

## Example Usage

```typescript
import { UpdateMaterialsRequest } from "servicem8/models/operations";

let value: UpdateMaterialsRequest = {
  uuid: "14470a98-4d9c-4418-9714-612ef5934cd0",
  materialCreate: {
    name: "<value>",
    uuid: "123e4567-0719-4932-bd73-23f945fd0dab",
    taxRateUuid: "123e4567-ca58-48a3-9a03-23f945b3507b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Material                                                   |
| `materialCreate`                                                       | [components.MaterialCreate](../../models/components/materialcreate.md) | :heavy_check_mark:                                                     | Material fields to update                                              |