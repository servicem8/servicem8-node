# UpdateAttachmentsRequest

## Example Usage

```typescript
import { UpdateAttachmentsRequest } from "servicem8/models/operations";

let value: UpdateAttachmentsRequest = {
  uuid: "2d413eb8-211a-4525-a453-772909b53404",
  attachment: {
    uuid: "123e4567-78c0-4b85-9333-2313f54e551b",
    relatedObjectUuid: "123e4567-3c7a-4fca-ae9e-2313f772fe0b",
    createdByStaffUuid: "123e4567-9e34-49ec-a4ea-2313fda3bd9b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Attachment                                                   |
| `attachment`                                                             | [components.AttachmentInput](../../models/components/attachmentinput.md) | :heavy_check_mark:                                                       | Attachment fields to update                                              |