# UpdateMaterialsRequest

## Example Usage

```typescript
import { UpdateMaterialsRequest } from "servicem8/models/operations";

let value: UpdateMaterialsRequest = {
  uuid: "14470a98-4d9c-4418-9714-612ef5934cd0",
  material: {
    name: "<value>",
    uuid: "123e4567-eb20-4ee0-88da-2306f9cb89fb",
    taxRateUuid: "123e4567-6400-46a9-8c2e-2306f61e778b",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Material                                                 |
| `material`                                                           | [components.MaterialInput](../../models/components/materialinput.md) | :heavy_check_mark:                                                   | Material fields to update                                            |