# UpdateCompanyContactsRequest

## Example Usage

```typescript
import { UpdateCompanyContactsRequest } from "servicem8/models/operations";

let value: UpdateCompanyContactsRequest = {
  uuid: "41cd5a6a-2702-43c6-9509-6c2790a58843",
  companyContact: {
    uuid: "123e4567-0f8c-46fd-a515-22b6c9ddfd5b",
    companyUuid: "123e4567-c934-42c7-bb14-22b6c1fafabb",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Company Contact                                                      |
| `companyContact`                                                                 | [components.CompanyContactInput](../../models/components/companycontactinput.md) | :heavy_check_mark:                                                               | Company Contact fields to update                                                 |