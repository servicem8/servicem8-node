# UpdateCompanyContactsRequest

## Example Usage

```typescript
import { UpdateCompanyContactsRequest } from "servicem8/models/operations";

let value: UpdateCompanyContactsRequest = {
  uuid: "41cd5a6a-2702-43c6-9509-6c2790a58843",
  companyContactCreate: {
    companyUuid: "123e4567-2db3-4ca8-ade6-234d5a7f077b",
    uuid: "123e4567-7e59-4697-b2e2-234d531b4bcb",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | UUID of the Company Contact                                                        |
| `companyContactCreate`                                                             | [components.CompanyContactCreate](../../models/components/companycontactcreate.md) | :heavy_check_mark:                                                                 | Company Contact fields to update                                                   |