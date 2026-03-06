# UpdateNotesRequest

## Example Usage

```typescript
import { UpdateNotesRequest } from "servicem8/models/operations";

let value: UpdateNotesRequest = {
  uuid: "da4cc607-8f1e-4a8a-a47c-29f7971019e7",
  noteCreate: {
    uuid: "123e4567-ff0e-44e0-a584-23eb25197d0b",
    relatedObjectUuid: "123e4567-9307-498e-b7f3-23eb2478d05b",
    actionCompletedByStaffUuid: "123e4567-6cb2-4058-958c-23eb2437ca6b",
    createDate: "2026-03-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Note                                               |
| `noteCreate`                                                   | [components.NoteCreate](../../models/components/notecreate.md) | :heavy_check_mark:                                             | Note fields to update                                          |