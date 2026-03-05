# UpdateCompanyContactsRequest

## Example Usage

```typescript
import { UpdateCompanyContactsRequest } from "servicem8/models/operations";

let value: UpdateCompanyContactsRequest = {
  uuid: "41cd5a6a-2702-43c6-9509-6c2790a58843",
  companyContactCreate: {
    companyUuid: "123e4567-9d7f-4719-b390-23e93be9b82b",
    uuid: "123e4567-637d-4954-8411-23e93a04058b",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `uuid`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | UUID of the Company Contact                                                        |
| `companyContactCreate`                                                             | [components.CompanyContactCreate](../../models/components/companycontactcreate.md) | :heavy_check_mark:                                                                 | Company Contact fields to update                                                   |