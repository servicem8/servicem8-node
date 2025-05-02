# UpdateNotesRequest

## Example Usage

```typescript
import { UpdateNotesRequest } from "servicem8/models/operations";

let value: UpdateNotesRequest = {
  uuid: "da4cc607-8f1e-4a8a-a47c-29f7971019e7",
  note: {
    uuid: "123e4567-d866-478b-b2cf-22b6c8888feb",
    relatedObjectUuid: "123e4567-0d4a-47dd-99e0-22b6cab56cfb",
    actionCompletedByStaffUuid: "123e4567-f78a-49c7-808f-22b6c275d65b",
    createDate: "2025-05-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Note                                             |
| `note`                                                       | [components.NoteInput](../../models/components/noteinput.md) | :heavy_check_mark:                                           | Note fields to update                                        |