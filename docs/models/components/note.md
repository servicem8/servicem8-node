# Note

## Example Usage

```typescript
import { Note } from "servicem8/models/components";

let value: Note = {
  uuid: "123e4567-6a92-422d-89bc-22bb0357c20b",
  editDate: "2025-05-01 12:00:00",
  relatedObjectUuid: "123e4567-05ca-4a1a-95b2-22bb05eddb8b",
  actionCompletedByStaffUuid: "123e4567-e8c7-4dbf-aaf7-22bb0a28facb",
  editByStaffUuid: "123e4567-b7f7-478b-95d4-22bb0d6ac92b",
  createDate: "2025-05-01 12:00:00",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier for this record                              | 123e4567-6a92-422d-89bc-22bb0357c20b                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag.  Valid values are [0,1]            |                                                                |
| `editDate`                                                     | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2025-05-01 12:00:00                                            |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-05ca-4a1a-95b2-22bb05eddb8b                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-e8c7-4dbf-aaf7-22bb0a28facb                           |
| `editByStaffUuid`                                              | *any*                                                          | :heavy_minus_sign:                                             | UUID of Staff Member who last modified record                  | 123e4567-b7f7-478b-95d4-22bb0d6ac92b                           |
| `createDate`                                                   | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2025-05-01 12:00:00                                            |