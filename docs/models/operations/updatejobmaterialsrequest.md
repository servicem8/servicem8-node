# UpdateJobMaterialsRequest

## Example Usage

```typescript
import { UpdateJobMaterialsRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialsRequest = {
  uuid: "8d4cf5b1-d4db-4391-b2eb-e84e3be3938f",
  jobMaterial: {
    uuid: "123e4567-debb-4141-932a-230fe47701fb",
    jobUuid: "123e4567-51b5-4082-a2c4-230fe82795eb",
    materialUuid: "123e4567-028f-44e8-a725-230fe2d6e9db",
    quantity: "<value>",
    taxRateUuid: "123e4567-e33f-4cd2-ba32-230fea2ae4cb",
    jobMaterialBundleUuid: "123e4567-83fe-4823-850a-230fee52493b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Job Material                                                   |
| `jobMaterial`                                                              | [components.JobMaterialInput](../../models/components/jobmaterialinput.md) | :heavy_check_mark:                                                         | Job Material fields to update                                              |