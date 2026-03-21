# UpdateCompanyContactsRequest

## Example Usage

```typescript
import { UpdateCompanyContactsRequest } from "servicem8/models/operations";

let value: UpdateCompanyContactsRequest = {
  uuid: "41cd5a6a-2702-43c6-9509-6c2790a58843",
  companyContactCreate: {
    companyUuid: "123e4567-02d4-4ed9-a25b-23f9484d2f2b",
    uuid: "123e4567-5fd5-4f90-b189-23f943d02b9b",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | UUID of the Company Contact                                                        |
| `companyContactCreate`                                                             | [components.CompanyContactCreate](../../models/components/companycontactcreate.md) | :heavy_check_mark:                                                                 | Company Contact fields to update                                                   |