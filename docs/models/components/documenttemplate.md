# DocumentTemplate

## Example Usage

```typescript
import { DocumentTemplate } from "servicem8/models/components";

let value: DocumentTemplate = {
  uuid: "123e4567-3674-4df5-a1b1-23c6fd1fbe4b",
  editDate: "2026-01-01 12:00:00",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | Unique identifier for this record                                                      | 123e4567-3674-4df5-a1b1-23c6fd1fbe4b                                                   |
| `active`                                                                               | [components.DocumentTemplateActive](../../models/components/documenttemplateactive.md) | :heavy_minus_sign:                                                                     | Record active/deleted flag.  Valid values are [0,1]                                    |                                                                                        |
| `editDate`                                                                             | *any*                                                                                  | :heavy_minus_sign:                                                                     | Timestamp at which record was last modified                                            | 2026-01-01 12:00:00                                                                    |
| `templateType`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | (Read only)                                                                            |                                                                                        |
| `relatedObject`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | (Read only)                                                                            |                                                                                        |
| `name`                                                                                 | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |