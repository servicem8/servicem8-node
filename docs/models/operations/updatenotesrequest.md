# UpdateNotesRequest

## Example Usage

```typescript
import { UpdateNotesRequest } from "servicem8/models/operations";

let value: UpdateNotesRequest = {
  uuid: "da4cc607-8f1e-4a8a-a47c-29f7971019e7",
  noteCreate: {
    uuid: "123e4567-72ca-42a2-9003-2348261850ab",
    relatedObjectUuid: "123e4567-4975-417e-b66a-234823f8f1bb",
    actionCompletedByStaffUuid: "123e4567-0b9c-4433-bec1-23482ad44b5b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Note                                               |
| `noteCreate`                                                   | [components.NoteCreate](../../models/components/notecreate.md) | :heavy_check_mark:                                             | Note fields to update                                          |