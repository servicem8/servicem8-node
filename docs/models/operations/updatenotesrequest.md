# UpdateNotesRequest

## Example Usage

```typescript
import { UpdateNotesRequest } from "servicem8/models/operations";

let value: UpdateNotesRequest = {
  uuid: "da4cc607-8f1e-4a8a-a47c-29f7971019e7",
  note: {
    uuid: "123e4567-4356-4710-b032-23076e726a4b",
    relatedObjectUuid: "123e4567-4844-40c7-a3e7-23076e92e3bb",
    actionCompletedByStaffUuid: "123e4567-0afa-40fd-9404-230767ff059b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Note                                             |
| `note`                                                       | [components.NoteInput](../../models/components/noteinput.md) | :heavy_check_mark:                                           | Note fields to update                                        |