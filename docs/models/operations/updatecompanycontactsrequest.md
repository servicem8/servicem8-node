# UpdateCompanyContactsRequest

## Example Usage

```typescript
import { UpdateCompanyContactsRequest } from "servicem8/models/operations";

let value: UpdateCompanyContactsRequest = {
  uuid: "41cd5a6a-2702-43c6-9509-6c2790a58843",
  companyContact: {
    uuid: "123e4567-f995-423c-a82a-230ef06e6d6b",
    companyUuid: "123e4567-e27c-4186-a9b4-230ef9657fcb",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Company Contact                                                      |
| `companyContact`                                                                 | [components.CompanyContactInput](../../models/components/companycontactinput.md) | :heavy_check_mark:                                                               | Company Contact fields to update                                                 |