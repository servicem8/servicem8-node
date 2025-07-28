# UpdateMaterialsRequest

## Example Usage

```typescript
import { UpdateMaterialsRequest } from "servicem8/models/operations";

let value: UpdateMaterialsRequest = {
  uuid: "14470a98-4d9c-4418-9714-612ef5934cd0",
  material: {
    name: "<value>",
    uuid: "123e4567-f0d4-4ac1-ad89-230ef502a5fb",
    taxRateUuid: "123e4567-f6ca-404c-8b31-230ef6ed40db",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Material                                                 |
| `material`                                                           | [components.MaterialInput](../../models/components/materialinput.md) | :heavy_check_mark:                                                   | Material fields to update                                            |