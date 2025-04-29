# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-f639-4f59-bf0a-22b4d8b4a4ab",
    jobUuid: "123e4567-0a00-4355-b814-22b4dfec62eb",
    materialUuid: "123e4567-fab6-4417-b953-22b4d28677fb",
    quantity: "<value>",
    taxRateUuid: "123e4567-a222-4568-91c6-22b4d92a16ab",
    jobMaterialBundleUuid: "123e4567-10b5-44fd-8f84-22b4d5435b4b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |