# DocumentTemplateInput

## Example Usage

```typescript
import { DocumentTemplateInput } from "servicem8/models/components";

let value: DocumentTemplateInput = {
  uuid: "123e4567-5206-45da-9928-231efd9d626b",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Unique identifier for this record                                                      | 123e4567-5206-45da-9928-231efd9d626b                                                   |
| `active`                                                                               | [components.DocumentTemplateActive](../../models/components/documenttemplateactive.md) | :heavy_minus_sign:                                                                     | Record active/deleted flag.  Valid values are [0,1]                                    |                                                                                        |
| `templateType`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | (Read only)                                                                            |                                                                                        |
| `relatedObject`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | (Read only)                                                                            |                                                                                        |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |