# UpdateNotesRequest

## Example Usage

```typescript
import { UpdateNotesRequest } from "servicem8/models/operations";

let value: UpdateNotesRequest = {
  uuid: "da4cc607-8f1e-4a8a-a47c-29f7971019e7",
  noteCreate: {
    uuid: "123e4567-d2c1-4f18-88d4-23b2e5ec24bb",
    relatedObjectUuid: "123e4567-9e6a-43b5-8f90-23b2e897685b",
    actionCompletedByStaffUuid: "123e4567-8ca3-4f41-bc87-23b2ecc578eb",
    createDate: "2026-01-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Note                                               |
| `noteCreate`                                                   | [components.NoteCreate](../../models/components/notecreate.md) | :heavy_check_mark:                                             | Note fields to update                                          |