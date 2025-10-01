# UpdateSuppliersRequest

## Example Usage

```typescript
import { UpdateSuppliersRequest } from "servicem8/models/operations";

let value: UpdateSuppliersRequest = {
  uuid: "7c635740-19b5-4bcb-be4c-5eef00d111d4",
  supplierCreate: {
    uuid: "123e4567-9e89-4079-8b67-234d59a8fc9b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Supplier                                                   |
| `supplierCreate`                                                       | [components.SupplierCreate](../../models/components/suppliercreate.md) | :heavy_check_mark:                                                     | Supplier fields to update                                              |