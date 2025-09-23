# UpdateCompanyContactsRequest

## Example Usage

```typescript
import { UpdateCompanyContactsRequest } from "servicem8/models/operations";

let value: UpdateCompanyContactsRequest = {
  uuid: "41cd5a6a-2702-43c6-9509-6c2790a58843",
  companyContactCreate: {
    companyUuid: "123e4567-5b96-4521-bfc7-234670bc4a7b",
    uuid: "123e4567-2ccd-4c5b-b1f7-23467a098e0b",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | UUID of the Company Contact                                                        |
| `companyContactCreate`                                                             | [components.CompanyContactCreate](../../models/components/companycontactcreate.md) | :heavy_check_mark:                                                                 | Company Contact fields to update                                                   |