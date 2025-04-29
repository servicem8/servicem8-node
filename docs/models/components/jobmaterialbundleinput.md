# JobMaterialBundleInput

## Example Usage

```typescript
import { JobMaterialBundleInput } from "servicem8/models/components";

let value: JobMaterialBundleInput = {
  uuid: "123e4567-8c6c-4c38-b757-22b4dde737cb",
  materialBundleUuid: "123e4567-78ed-48a8-bbef-22b4d3fee05b",
  jobUuid: "123e4567-c76b-496a-beb4-22b4d1b3c87b",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Record UUID key                                                                          | 123e4567-8c6c-4c38-b757-22b4dde737cb                                                     |
| `active`                                                                                 | [components.JobMaterialBundleActive](../../models/components/jobmaterialbundleactive.md) | :heavy_minus_sign:                                                                       | Record active/deleted flag. <br/><br/>Valid values are [0,1]                             |                                                                                          |
| `itemNumber`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `quantity`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `sortOrder`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `materialBundleUuid`                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | UUID of the MaterialBundle which this JobMaterialBundle was originally created from.     | 123e4567-78ed-48a8-bbef-22b4d3fee05b                                                     |
| `jobUuid`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 123e4567-c76b-496a-beb4-22b4d1b3c87b                                                     |