# UpdateVendorsRequest

## Example Usage

```typescript
import { UpdateVendorsRequest } from "servicem8/models/operations";

let value: UpdateVendorsRequest = {
  uuid: "2aadd6fd-2ed6-4ac7-b6dc-8ebe5cf1d32a",
  vendor: {
    uuid: "123e4567-e727-46ec-a6f8-22bb0f8575ab",
    name: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Vendor                                               |
| `vendor`                                                         | [components.VendorInput](../../models/components/vendorinput.md) | :heavy_check_mark:                                               | Vendor fields to update                                          |