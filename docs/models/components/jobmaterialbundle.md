# JobMaterialBundle

## Example Usage

```typescript
import { JobMaterialBundle } from "servicem8/models/components";

let value: JobMaterialBundle = {
  uuid: "123e4567-8f27-41ee-ad52-22b563f339eb",
  editDate: "YYYY-MM-DD HH:MM:SS",
  materialBundleUuid: "123e4567-7b24-4692-b364-22b56e58277b",
  jobUuid: "123e4567-f0f8-40f4-88fd-22b56647a32b",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `uuid`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Record UUID key                                                                          | 123e4567-8f27-41ee-ad52-22b563f339eb                                                     |
| `active`                                                                                 | [components.JobMaterialBundleActive](../../models/components/jobmaterialbundleactive.md) | :heavy_minus_sign:                                                                       | Record active/deleted flag. <br/><br/>Valid values are [0,1]                             |                                                                                          |
| `editDate`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | Record last modified timestamp                                                           | YYYY-MM-DD HH:MM:SS                                                                      |
| `itemNumber`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `name`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `quantity`                                                                               | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `sortOrder`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `materialBundleUuid`                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | UUID of the MaterialBundle which this JobMaterialBundle was originally created from.     | 123e4567-7b24-4692-b364-22b56e58277b                                                     |
| `jobUuid`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | 123e4567-f0f8-40f4-88fd-22b56647a32b                                                     |