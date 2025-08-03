# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-333d-4dc7-a08a-2313fd47ab0b",
    jobUuid: "123e4567-217a-4219-bea6-2313f70dbf6b",
    materialUuid: "123e4567-89ba-4b56-b7f7-2313fd9f1e7b",
    quantity: "<value>",
    taxRateUuid: "123e4567-698c-4b3c-a93a-2313f57deefb",
    jobMaterialBundleUuid: "123e4567-d9a7-4203-a6c1-2313f3af974b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |