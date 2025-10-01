# UpdateAttachmentsRequest

## Example Usage

```typescript
import { UpdateAttachmentsRequest } from "servicem8/models/operations";

let value: UpdateAttachmentsRequest = {
  uuid: "2d413eb8-211a-4525-a453-772909b53404",
  attachmentCreate: {
    relatedObjectUuid: "123e4567-0269-4523-9a6b-234d5bdfdceb",
    uuid: "123e4567-33c7-4335-a1c3-234d529b8fab",
    createdByStaffUuid: "123e4567-8da2-4d96-8ff9-234d58e93fcb",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Attachment                                                     |
| `attachmentCreate`                                                         | [components.AttachmentCreate](../../models/components/attachmentcreate.md) | :heavy_check_mark:                                                         | Attachment fields to update                                                |