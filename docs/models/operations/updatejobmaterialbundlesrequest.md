# UpdateJobMaterialBundlesRequest

## Example Usage

```typescript
import { UpdateJobMaterialBundlesRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialBundlesRequest = {
  uuid: "0e6c3b75-832a-4ef7-93a4-7793e5e1e050",
  jobMaterialBundle: {
    uuid: "123e4567-2334-4d3e-a25f-22bcbf956e2b",
    materialBundleUuid: "123e4567-ffb2-4ac2-858f-22bcb0cdf56b",
    jobUuid: "123e4567-6ae1-4723-b0c4-22bcbc8ea90b",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | UUID of the Job Material Bundle                                                        |
| `jobMaterialBundle`                                                                    | [components.JobMaterialBundleInput](../../models/components/jobmaterialbundleinput.md) | :heavy_check_mark:                                                                     | Job Material Bundle fields to update                                                   |