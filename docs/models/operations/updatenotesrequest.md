# UpdateNotesRequest

## Example Usage

```typescript
import { UpdateNotesRequest } from "servicem8/models/operations";

let value: UpdateNotesRequest = {
  uuid: "da4cc607-8f1e-4a8a-a47c-29f7971019e7",
  noteCreate: {
    uuid: "123e4567-d9d7-4cbb-ba6f-233c62baeb0b",
    relatedObjectUuid: "123e4567-40b5-497d-8ece-233c6e25516b",
    actionCompletedByStaffUuid: "123e4567-2d98-4796-b616-233c6f78634b",
    createDate: "2025-09-01 12:00:00",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_check_mark:                                             | UUID of the Note                                               |
| `noteCreate`                                                   | [components.NoteCreate](../../models/components/notecreate.md) | :heavy_check_mark:                                             | Note fields to update                                          |