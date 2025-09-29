# UpdateAttachmentsRequest

## Example Usage

```typescript
import { UpdateAttachmentsRequest } from "servicem8/models/operations";

let value: UpdateAttachmentsRequest = {
  uuid: "2d413eb8-211a-4525-a453-772909b53404",
  attachmentCreate: {
    relatedObjectUuid: "123e4567-1b01-4b68-9ae3-234970ab9b1b",
    uuid: "123e4567-3c6a-46cd-9a44-23497f33d3ab",
    createdByStaffUuid: "123e4567-78a9-4087-8c43-234979e64b8b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Attachment                                                     |
| `attachmentCreate`                                                         | [components.AttachmentCreate](../../models/components/attachmentcreate.md) | :heavy_check_mark:                                                         | Attachment fields to update                                                |