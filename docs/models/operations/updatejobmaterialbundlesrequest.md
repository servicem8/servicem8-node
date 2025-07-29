# UpdateJobMaterialBundlesRequest

## Example Usage

```typescript
import { UpdateJobMaterialBundlesRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialBundlesRequest = {
  uuid: "0e6c3b75-832a-4ef7-93a4-7793e5e1e050",
  jobMaterialBundle: {
    uuid: "123e4567-7bc1-41ff-8048-230febb61b4b",
    materialBundleUuid: "123e4567-cdb4-4bde-bd99-230fe397968b",
    jobUuid: "123e4567-fe7f-4485-8777-230fee0540cb",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | UUID of the Job Material Bundle                                                        |
| `jobMaterialBundle`                                                                    | [components.JobMaterialBundleInput](../../models/components/jobmaterialbundleinput.md) | :heavy_check_mark:                                                                     | Job Material Bundle fields to update                                                   |