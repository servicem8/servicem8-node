# UpdateNotesRequest

## Example Usage

```typescript
import { UpdateNotesRequest } from "servicem8/models/operations";

let value: UpdateNotesRequest = {
  uuid: "da4cc607-8f1e-4a8a-a47c-29f7971019e7",
  noteCreate: {
    uuid: "123e4567-e987-4c15-8af5-23f948cf3d7b",
    relatedObjectUuid: "123e4567-c33e-4f75-b941-23f9419f61bb",
    actionCompletedByStaffUuid: "123e4567-f36e-4657-933d-23f945f1fdab",
    createDate: "2026-03-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Note                                               |
| `noteCreate`                                                   | [components.NoteCreate](../../models/components/notecreate.md) | :heavy_check_mark:                                             | Note fields to update                                          |