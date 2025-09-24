# UpdateJobMaterialBundlesRequest

## Example Usage

```typescript
import { UpdateJobMaterialBundlesRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialBundlesRequest = {
  uuid: "0e6c3b75-832a-4ef7-93a4-7793e5e1e050",
  jobMaterialBundleCreate: {
    uuid: "123e4567-05ef-4900-b702-23482429e5ab",
    materialBundleUuid: "123e4567-3d2c-4bca-ac5d-23482177b4eb",
    jobUuid: "123e4567-c414-475e-beea-234824f9a57b",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | UUID of the Job Material Bundle                                                          |
| `jobMaterialBundleCreate`                                                                | [components.JobMaterialBundleCreate](../../models/components/jobmaterialbundlecreate.md) | :heavy_check_mark:                                                                       | Job Material Bundle fields to update                                                     |