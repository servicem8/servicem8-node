# Note

## Example Usage

```typescript
import { Note } from "servicem8/models/components";

let value: Note = {
  uuid: "123e4567-c969-4dd2-8496-2349777e920b",
  editDate: "2025-09-01 12:00:00",
  relatedObjectUuid: "123e4567-c8f6-4862-a600-23497b85323b",
  actionCompletedByStaffUuid: "123e4567-a9c1-427f-9091-23497a4d62fb",
  editByStaffUuid: "123e4567-f24a-452d-be30-23497909e5fb",
  createDate: "2025-09-01 12:00:00",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier for this record                              | 123e4567-c969-4dd2-8496-2349777e920b                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag.  Valid values are [0,1]            |                                                                |
| `editDate`                                                     | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2025-09-01 12:00:00                                            |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-c8f6-4862-a600-23497b85323b                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-a9c1-427f-9091-23497a4d62fb                           |
| `editByStaffUuid`                                              | *any*                                                          | :heavy_minus_sign:                                             | UUID of Staff Member who last modified record                  | 123e4567-f24a-452d-be30-23497909e5fb                           |
| `createDate`                                                   | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2025-09-01 12:00:00                                            |