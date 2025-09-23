# UpdateJobMaterialBundlesRequest

## Example Usage

```typescript
import { UpdateJobMaterialBundlesRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialBundlesRequest = {
  uuid: "0e6c3b75-832a-4ef7-93a4-7793e5e1e050",
  jobMaterialBundleCreate: {
    uuid: "123e4567-661b-4cf7-a28a-234678cba3db",
    materialBundleUuid: "123e4567-3a40-49ef-82bf-23467452ec2b",
    jobUuid: "123e4567-d0e9-46d1-b9ad-234675c2f86b",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | UUID of the Job Material Bundle                                                          |
| `jobMaterialBundleCreate`                                                                | [components.JobMaterialBundleCreate](../../models/components/jobmaterialbundlecreate.md) | :heavy_check_mark:                                                                       | Job Material Bundle fields to update                                                     |