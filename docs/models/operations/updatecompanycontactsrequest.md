# UpdateCompanyContactsRequest

## Example Usage

```typescript
import { UpdateCompanyContactsRequest } from "servicem8/models/operations";

let value: UpdateCompanyContactsRequest = {
  uuid: "41cd5a6a-2702-43c6-9509-6c2790a58843",
  companyContact: {
    uuid: "123e4567-a0f6-402c-927a-231cfea5946b",
    companyUuid: "123e4567-a2f0-41f9-ba25-231cf8bacd0b",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Company Contact                                                      |
| `companyContact`                                                                 | [components.CompanyContactInput](../../models/components/companycontactinput.md) | :heavy_check_mark:                                                               | Company Contact fields to update                                                 |