# UpdateAttachmentsRequest

## Example Usage

```typescript
import { UpdateAttachmentsRequest } from "servicem8/models/operations";

let value: UpdateAttachmentsRequest = {
  uuid: "2d413eb8-211a-4525-a453-772909b53404",
  attachment: {
    uuid: "123e4567-f811-4291-8c9a-22bdcd00866b",
    relatedObjectUuid: "123e4567-7851-4dad-9458-22bdc080a48b",
    createdByStaffUuid: "123e4567-0284-4f8a-83d3-22bdc59197db",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `uuid`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | UUID of the Attachment                                                   |
| `attachment`                                                             | [components.AttachmentInput](../../models/components/attachmentinput.md) | :heavy_check_mark:                                                       | Attachment fields to update                                              |