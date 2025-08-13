# UpdateVendorsRequest

## Example Usage

```typescript
import { UpdateVendorsRequest } from "servicem8/models/operations";

let value: UpdateVendorsRequest = {
  uuid: "2aadd6fd-2ed6-4ac7-b6dc-8ebe5cf1d32a",
  vendor: {
    uuid: "123e4567-482a-47f3-b7d0-231efa8a9eab",
    name: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `uuid`                                                           | *string*                                                         | :heavy_check_mark:                                               | UUID of the Vendor                                               |
| `vendor`                                                         | [components.VendorInput](../../models/components/vendorinput.md) | :heavy_check_mark:                                               | Vendor fields to update                                          |