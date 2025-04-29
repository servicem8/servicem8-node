# JobMaterialBundle

## Example Usage

```typescript
import { JobMaterialBundle } from "servicem8/models/components";

let value: JobMaterialBundle = {
  uuid: "123e4567-e317-4cdb-86a0-22b4d5fe743b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  materialBundleUuid: "123e4567-a138-4c88-a5b4-22b4d093099b",
  jobUuid: "123e4567-f218-4c21-9c88-22b4d2af510b",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Record UUID key                                                                          | 123e4567-e317-4cdb-86a0-22b4d5fe743b                                                     |
| `active`                                                                                 | [components.JobMaterialBundleActive](../../models/components/jobmaterialbundleactive.md) | :heavy_minus_sign:                                                                       | Record active/deleted flag. <br/><br/>Valid values are [0,1]                             |                                                                                          |
| `editDate`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Record last modified timestamp                                                           | YYYY-MM-DD HH:MM:SS                                                                      |
| `itemNumber`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `quantity`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `sortOrder`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `materialBundleUuid`                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | UUID of the MaterialBundle which this JobMaterialBundle was originally created from.     | 123e4567-a138-4c88-a5b4-22b4d093099b                                                     |
| `jobUuid`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 123e4567-f218-4c21-9c88-22b4d2af510b                                                     |