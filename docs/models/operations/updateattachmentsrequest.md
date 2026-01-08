# UpdateAttachmentsRequest

## Example Usage

```typescript
import { UpdateAttachmentsRequest } from "servicem8/models/operations";

let value: UpdateAttachmentsRequest = {
  uuid: "2d413eb8-211a-4525-a453-772909b53404",
  attachmentCreate: {
    relatedObjectUuid: "123e4567-927f-4d27-a9bf-23b2e0beb6bb",
    uuid: "123e4567-1473-4660-b8a2-23b2e0ef226b",
    createdByStaffUuid: "123e4567-f74e-484e-82e8-23b2e91fdb8b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Attachment                                                     |
| `attachmentCreate`                                                         | [components.AttachmentCreate](../../models/components/attachmentcreate.md) | :heavy_check_mark:                                                         | Attachment fields to update                                                |