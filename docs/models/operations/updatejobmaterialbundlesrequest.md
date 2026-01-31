# UpdateJobMaterialBundlesRequest

## Example Usage

```typescript
import { UpdateJobMaterialBundlesRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialBundlesRequest = {
  uuid: "0e6c3b75-832a-4ef7-93a4-7793e5e1e050",
  jobMaterialBundleCreate: {
    uuid: "123e4567-6694-4b08-8b0f-23c6f0be297b",
    materialBundleUuid: "123e4567-b277-4731-a1a9-23c6ff50ebdb",
    jobUuid: "123e4567-7889-4e69-874d-23c6fb0dfedb",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | UUID of the Job Material Bundle                                                          |
| `jobMaterialBundleCreate`                                                                | [components.JobMaterialBundleCreate](../../models/components/jobmaterialbundlecreate.md) | :heavy_check_mark:                                                                       | Job Material Bundle fields to update                                                     |