# UpdateMaterialsRequest

## Example Usage

```typescript
import { UpdateMaterialsRequest } from "servicem8/models/operations";

let value: UpdateMaterialsRequest = {
  uuid: "14470a98-4d9c-4418-9714-612ef5934cd0",
  material: {
    name: "<value>",
    uuid: "123e4567-4b5a-4e55-a2d8-22b6cea5405b",
    taxRateUuid: "123e4567-d862-4758-a4f3-22b6cd944d8b",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Material                                                 |
| `material`                                                           | [components.MaterialInput](../../models/components/materialinput.md) | :heavy_check_mark:                                                   | Material fields to update                                            |