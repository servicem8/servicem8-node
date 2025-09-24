# UpdateCompanyContactsRequest

## Example Usage

```typescript
import { UpdateCompanyContactsRequest } from "servicem8/models/operations";

let value: UpdateCompanyContactsRequest = {
  uuid: "41cd5a6a-2702-43c6-9509-6c2790a58843",
  companyContactCreate: {
    companyUuid: "123e4567-dfaf-4127-b978-23482db76ebb",
    uuid: "123e4567-605e-461e-884c-234825a8923b",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | UUID of the Company Contact                                                        |
| `companyContactCreate`                                                             | [components.CompanyContactCreate](../../models/components/companycontactcreate.md) | :heavy_check_mark:                                                                 | Company Contact fields to update                                                   |