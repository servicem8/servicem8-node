# UpdateDocumentTemplatesRequest

## Example Usage

```typescript
import { UpdateDocumentTemplatesRequest } from "servicem8/models/operations";

let value: UpdateDocumentTemplatesRequest = {
  uuid: "b4563396-3cb5-4855-b5c4-b8ec3d98a34d",
  documentTemplateCreate: {
    uuid: "123e4567-564d-4009-b146-23b2e93c15eb",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `uuid`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | UUID of the Document Template                                                          |
| `documentTemplateCreate`                                                               | [components.DocumentTemplateCreate](../../models/components/documenttemplatecreate.md) | :heavy_check_mark:                                                                     | Document Template fields to update                                                     |