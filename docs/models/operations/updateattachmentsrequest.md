# UpdateAttachmentsRequest

## Example Usage

```typescript
import { UpdateAttachmentsRequest } from "servicem8/models/operations";

let value: UpdateAttachmentsRequest = {
  uuid: "2d413eb8-211a-4525-a453-772909b53404",
  attachmentCreate: {
    relatedObjectUuid: "123e4567-f0d3-4fef-af94-234671f0b5cb",
    uuid: "123e4567-0fac-4161-867a-23467f3674bb",
    createdByStaffUuid: "123e4567-c015-4d6c-b4f1-2346751d1e0b",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the Attachment                                                     |
| `attachmentCreate`                                                         | [components.AttachmentCreate](../../models/components/attachmentcreate.md) | :heavy_check_mark:                                                         | Attachment fields to update                                                |