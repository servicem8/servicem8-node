# UpdateAttachmentsRequest

## Example Usage

```typescript
import { UpdateAttachmentsRequest } from "servicem8/models/operations";

let value: UpdateAttachmentsRequest = {
  uuid: "2d413eb8-211a-4525-a453-772909b53404",
  attachment: {
    uuid: "123e4567-0838-4771-a513-230fe6a93abb",
    relatedObjectUuid: "123e4567-4f6e-4ed1-b388-230fe80c242b",
    createdByStaffUuid: "123e4567-bd54-4f6f-831f-230fe8d670bb",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Attachment                                                   |
| `attachment`                                                             | [components.AttachmentInput](../../models/components/attachmentinput.md) | :heavy_check_mark:                                                       | Attachment fields to update                                              |