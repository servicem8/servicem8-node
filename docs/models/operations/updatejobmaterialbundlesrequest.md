# UpdateJobMaterialBundlesRequest

## Example Usage

```typescript
import { UpdateJobMaterialBundlesRequest } from "servicem8/models/operations";

let value: UpdateJobMaterialBundlesRequest = {
  uuid: "0e6c3b75-832a-4ef7-93a4-7793e5e1e050",
  jobMaterialBundle: {
    uuid: "123e4567-5b2f-413b-98ac-2308e6f6f1bb",
    materialBundleUuid: "123e4567-3b4c-466a-b2fe-2308edc9bc7b",
    jobUuid: "123e4567-6769-45b3-a638-2308e4d1119b",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | UUID of the Job Material Bundle                                                        |
| `jobMaterialBundle`                                                                    | [components.JobMaterialBundleInput](../../models/components/jobmaterialbundleinput.md) | :heavy_check_mark:                                                                     | Job Material Bundle fields to update                                                   |