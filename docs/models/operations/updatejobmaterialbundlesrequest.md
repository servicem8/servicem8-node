# UpdateJobMaterialBundlesRequest

## Example Usage

```typescript
import { UpdateJobMaterialBundlesRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialBundlesRequest = {
  uuid: "0e6c3b75-832a-4ef7-93a4-7793e5e1e050",
  jobMaterialBundleCreate: {
    uuid: "123e4567-be9a-465a-a8db-233c67787e5b",
    materialBundleUuid: "123e4567-aa12-463a-bfc3-233c6894415b",
    jobUuid: "123e4567-2062-4b01-9c05-233c6a146ddb",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | UUID of the Job Material Bundle                                                          |
| `jobMaterialBundleCreate`                                                                | [components.JobMaterialBundleCreate](../../models/components/jobmaterialbundlecreate.md) | :heavy_check_mark:                                                                       | Job Material Bundle fields to update                                                     |