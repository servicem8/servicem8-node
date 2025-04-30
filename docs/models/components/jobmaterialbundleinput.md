# JobMaterialBundleInput

## Example Usage

```typescript
import { JobMaterialBundleInput } from "servicem8/models/components";

let value: JobMaterialBundleInput = {
  uuid: "123e4567-8cde-424b-8832-22b56c55816b",
  materialBundleUuid: "123e4567-1546-4cb2-9392-22b5625c660b",
  jobUuid: "123e4567-9f2b-415f-a96d-22b56f12d69b",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Record UUID key                                                                          | 123e4567-8cde-424b-8832-22b56c55816b                                                     |
| `active`                                                                                 | [components.JobMaterialBundleActive](../../models/components/jobmaterialbundleactive.md) | :heavy_minus_sign:                                                                       | Record active/deleted flag. <br/><br/>Valid values are [0,1]                             |                                                                                          |
| `itemNumber`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `quantity`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `sortOrder`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `materialBundleUuid`                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | UUID of the MaterialBundle which this JobMaterialBundle was originally created from.     | 123e4567-1546-4cb2-9392-22b5625c660b                                                     |
| `jobUuid`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 123e4567-9f2b-415f-a96d-22b56f12d69b                                                     |