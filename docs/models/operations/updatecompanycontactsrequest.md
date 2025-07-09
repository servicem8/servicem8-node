# UpdateCompanyContactsRequest

## Example Usage

```typescript
import { UpdateCompanyContactsRequest } from "servicem8/models/operations";

let value: UpdateCompanyContactsRequest = {
  uuid: "41cd5a6a-2702-43c6-9509-6c2790a58843",
  companyContact: {
    uuid: "123e4567-d519-4a00-8bb2-22fb2d23fc7b",
    companyUuid: "123e4567-9182-46d4-8a8e-22fb24fe747b",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Company Contact                                                      |
| `companyContact`                                                                 | [components.CompanyContactInput](../../models/components/companycontactinput.md) | :heavy_check_mark:                                                               | Company Contact fields to update                                                 |