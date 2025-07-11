# UpdateVendorsRequest

## Example Usage

```typescript
import { UpdateVendorsRequest } from "servicem8/models/operations";

let value: UpdateVendorsRequest = {
  uuid: "2aadd6fd-2ed6-4ac7-b6dc-8ebe5cf1d32a",
  vendor: {
    uuid: "123e4567-b82c-4c1e-bd63-22fd85cd889b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Vendor                                               |
| `vendor`                                                         | [components.VendorInput](../../models/components/vendorinput.md) | :heavy_check_mark:                                               | Vendor fields to update                                          |