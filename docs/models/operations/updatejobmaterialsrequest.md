# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-e059-4284-a091-22fc046f3deb",
    jobUuid: "123e4567-13a7-4455-8955-22fc01d5a2ab",
    materialUuid: "123e4567-ba2b-4b18-bf18-22fc0b12878b",
    quantity: "<value>",
    taxRateUuid: "123e4567-6808-4b00-89e0-22fc07175fab",
    jobMaterialBundleUuid: "123e4567-04ae-488f-8012-22fc0f97f2eb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |