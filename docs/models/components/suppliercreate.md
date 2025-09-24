# SupplierCreate

## Example Usage

```typescript
import { SupplierCreate } from "servicem8/models/components";

let value: SupplierCreate = {
  uuid: "123e4567-ae2d-444a-b0e2-23482bc65e8b",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `uuid`                                        | *string*                                      | :heavy_minus_sign:                            | Unique identifier for this record             | 123e4567-ae2d-444a-b0e2-23482bc65e8b          |
| `name`                                        | *string*                                      | :heavy_minus_sign:                            | The name of the supplier company              |                                               |
| `businessNumber`                              | *string*                                      | :heavy_minus_sign:                            | Business registration number (e.g., ABN, EIN) |                                               |
| `address`                                     | *string*                                      | :heavy_minus_sign:                            | Physical address of the supplier store        |                                               |
| `email`                                       | *string*                                      | :heavy_minus_sign:                            | Primary contact email address                 |                                               |
| `phone`                                       | *string*                                      | :heavy_minus_sign:                            | Primary contact phone number                  |                                               |
| `accountNumber`                               | *string*                                      | :heavy_minus_sign:                            | Your account number with this supplier        |                                               |