# UpdateDocumentTemplatesRequest

## Example Usage

```typescript
import { UpdateDocumentTemplatesRequest } from "servicem8/models/operations";

let value: UpdateDocumentTemplatesRequest = {
  uuid: "b4563396-3cb5-4855-b5c4-b8ec3d98a34d",
  documentTemplate: {
    uuid: "123e4567-3438-45de-bafd-2329bc4ba00b",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `uuid`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | UUID of the Document Template                                                        |
| `documentTemplate`                                                                   | [components.DocumentTemplateInput](../../models/components/documenttemplateinput.md) | :heavy_check_mark:                                                                   | Document Template fields to update                                                   |