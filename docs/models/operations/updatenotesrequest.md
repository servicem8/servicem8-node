# UpdateNotesRequest

## Example Usage

```typescript
import { UpdateNotesRequest } from "servicem8/models/operations";

let value: UpdateNotesRequest = {
  uuid: "da4cc607-8f1e-4a8a-a47c-29f7971019e7",
  note: {
    uuid: "123e4567-8139-48dd-84e8-22b4d0e390cb",
    relatedObjectUuid: "123e4567-0ee6-4314-a56b-22b4d7c77efb",
    actionCompletedByStaffUuid: "123e4567-72a3-4634-b1c4-22b4d9083b4b",
    createDate: "YYYY-MM-DD HH:MM:SS",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Note                                             |
| `note`                                                       | [components.NoteInput](../../models/components/noteinput.md) | :heavy_check_mark:                                           | Note fields to update                                        |