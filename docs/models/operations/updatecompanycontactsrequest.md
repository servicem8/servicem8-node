# UpdateCompanyContactsRequest

## Example Usage

```typescript
import { UpdateCompanyContactsRequest } from "servicem8/models/operations";

let value: UpdateCompanyContactsRequest = {
  uuid: "41cd5a6a-2702-43c6-9509-6c2790a58843",
  companyContact: {
    uuid: "123e4567-639f-45d9-a321-231fe9bdcf7b",
    companyUuid: "123e4567-952e-449e-b394-231fef66318b",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Company Contact                                                      |
| `companyContact`                                                                 | [components.CompanyContactInput](../../models/components/companycontactinput.md) | :heavy_check_mark:                                                               | Company Contact fields to update                                                 |