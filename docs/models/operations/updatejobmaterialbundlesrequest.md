# UpdateJobMaterialBundlesRequest

## Example Usage

```typescript
import { UpdateJobMaterialBundlesRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialBundlesRequest = {
  uuid: "0e6c3b75-832a-4ef7-93a4-7793e5e1e050",
  jobMaterialBundleCreate: {
    uuid: "123e4567-4255-418c-a328-234979d714cb",
    materialBundleUuid: "123e4567-07ac-470e-ac9d-23497c5a921b",
    jobUuid: "123e4567-011e-466c-8e39-234972bb636b",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | UUID of the Job Material Bundle                                                          |
| `jobMaterialBundleCreate`                                                                | [components.JobMaterialBundleCreate](../../models/components/jobmaterialbundlecreate.md) | :heavy_check_mark:                                                                       | Job Material Bundle fields to update                                                     |