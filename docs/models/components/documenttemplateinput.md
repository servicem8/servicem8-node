# DocumentTemplateInput

## Example Usage

```typescript
import { DocumentTemplateInput } from "servicem8/models/components";

let value: DocumentTemplateInput = {
  uuid: "123e4567-ac6b-4522-b1cb-231b27b69fab",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Unique identifier for this record                                                      | 123e4567-ac6b-4522-b1cb-231b27b69fab                                                   |
| `active`                                                                               | [components.DocumentTemplateActive](../../models/components/documenttemplateactive.md) | :heavy_minus_sign:                                                                     | Record active/deleted flag.  Valid values are [0,1]                                    |                                                                                        |
| `templateType`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | (Read only)                                                                            |                                                                                        |
| `relatedObject`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |