# UpdateAttachmentsRequest

## Example Usage

```typescript
import { UpdateAttachmentsRequest } from "servicem8/models/operations";

let value: UpdateAttachmentsRequest = {
  uuid: "2d413eb8-211a-4525-a453-772909b53404",
  attachmentCreate: {
    relatedObjectUuid: "123e4567-2de2-4b1f-a188-23d598b06dcb",
    uuid: "123e4567-6823-4b75-b4e9-23d59076390b",
    createdByStaffUuid: "123e4567-7683-4b6c-891d-23d59a95581b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Attachment                                                     |
| `attachmentCreate`                                                         | [components.AttachmentCreate](../../models/components/attachmentcreate.md) | :heavy_check_mark:                                                         | Attachment fields to update                                                |