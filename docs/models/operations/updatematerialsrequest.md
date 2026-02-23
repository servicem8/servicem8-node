# UpdateMaterialsRequest

## Example Usage

```typescript
import { UpdateMaterialsRequest } from "servicem8/models/operations";

let value: UpdateMaterialsRequest = {
  uuid: "14470a98-4d9c-4418-9714-612ef5934cd0",
  materialCreate: {
    name: "<value>",
    uuid: "123e4567-e8ab-4a61-ad58-23d59031817b",
    taxRateUuid: "123e4567-03a9-458f-a90b-23d59f3ffd0b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Material                                                   |
| `materialCreate`                                                       | [components.MaterialCreate](../../models/components/materialcreate.md) | :heavy_check_mark:                                                     | Material fields to update                                              |