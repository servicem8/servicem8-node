# UpdateAttachmentsRequest

## Example Usage

```typescript
import { UpdateAttachmentsRequest } from "servicem8/models/operations";

let value: UpdateAttachmentsRequest = {
  uuid: "2d413eb8-211a-4525-a453-772909b53404",
  attachment: {
    uuid: "123e4567-6059-4fac-8792-22b564f4f6fb",
    relatedObjectUuid: "123e4567-483d-4696-ae86-22b56036dc7b",
    createdByStaffUuid: "123e4567-4983-4375-a8d1-22b56d7a6b4b",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Attachment                                                   |
| `attachment`                                                             | [components.AttachmentInput](../../models/components/attachmentinput.md) | :heavy_check_mark:                                                       | Attachment fields to update                                              |