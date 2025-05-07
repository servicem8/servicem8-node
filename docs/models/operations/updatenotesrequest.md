# UpdateNotesRequest

## Example Usage

```typescript
import { UpdateNotesRequest } from "servicem8/models/operations";

let value: UpdateNotesRequest = {
  uuid: "da4cc607-8f1e-4a8a-a47c-29f7971019e7",
  note: {
    uuid: "123e4567-8ef7-4349-a650-22bcb44005fb",
    relatedObjectUuid: "123e4567-5626-4c35-9909-22bcb21108fb",
    actionCompletedByStaffUuid: "123e4567-1b2f-42f8-a69d-22bcb62a4fab",
    createDate: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Note                                             |
| `note`                                                       | [components.NoteInput](../../models/components/noteinput.md) | :heavy_check_mark:                                           | Note fields to update                                        |