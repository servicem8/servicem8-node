# UpdateNotesRequest

## Example Usage

```typescript
import { UpdateNotesRequest } from "servicem8/models/operations";

let value: UpdateNotesRequest = {
  uuid: "da4cc607-8f1e-4a8a-a47c-29f7971019e7",
  note: {
    uuid: "123e4567-cb77-4be0-b1b0-22fc0142d44b",
    relatedObjectUuid: "123e4567-a3b9-4235-a685-22fc0af7a9fb",
    actionCompletedByStaffUuid: "123e4567-a681-4a4b-8931-22fc026d3f3b",
    createDate: "2025-07-01 12:00:00",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `uuid`                                                       | *string*                                                     | :heavy_check_mark:                                           | UUID of the Note                                             |
| `note`                                                       | [components.NoteInput](../../models/components/noteinput.md) | :heavy_check_mark:                                           | Note fields to update                                        |