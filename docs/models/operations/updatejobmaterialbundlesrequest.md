# UpdateJobMaterialBundlesRequest

## Example Usage

```typescript
import { UpdateJobMaterialBundlesRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialBundlesRequest = {
  uuid: "0e6c3b75-832a-4ef7-93a4-7793e5e1e050",
  jobMaterialBundle: {
    uuid: "123e4567-bea4-4220-90e9-231fef98252b",
    materialBundleUuid: "123e4567-7a50-4b3d-9042-231fe8658abb",
    jobUuid: "123e4567-7fa3-4e23-81ca-231fee20a33b",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | UUID of the Job Material Bundle                                                        |
| `jobMaterialBundle`                                                                    | [components.JobMaterialBundleInput](../../models/components/jobmaterialbundleinput.md) | :heavy_check_mark:                                                                     | Job Material Bundle fields to update                                                   |