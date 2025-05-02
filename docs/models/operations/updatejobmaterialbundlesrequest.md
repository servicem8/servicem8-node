# UpdateJobMaterialBundlesRequest

## Example Usage

```typescript
import { UpdateJobMaterialBundlesRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialBundlesRequest = {
  uuid: "0e6c3b75-832a-4ef7-93a4-7793e5e1e050",
  jobMaterialBundle: {
    uuid: "123e4567-52b9-4321-8e96-22b6c94e1afb",
    materialBundleUuid: "123e4567-106e-4f77-b0b0-22b6c6b4001b",
    jobUuid: "123e4567-5f42-4f67-862b-22b6c7f2034b",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | UUID of the Job Material Bundle                                                        |
| `jobMaterialBundle`                                                                    | [components.JobMaterialBundleInput](../../models/components/jobmaterialbundleinput.md) | :heavy_check_mark:                                                                     | Job Material Bundle fields to update                                                   |