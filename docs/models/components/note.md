# Note

## Example Usage

```typescript
import { Note } from "servicem8/models/components";

let value: Note = {
  uuid: "123e4567-5aae-4315-b68e-230c4b448f3b",
  editDate: "2025-07-01 12:00:00",
  relatedObjectUuid: "123e4567-62f7-4c3a-89ae-230c4c3d67db",
  actionCompletedByStaffUuid: "123e4567-241a-4351-a101-230c4827532b",
  editByStaffUuid: "123e4567-7f77-474a-ba4d-230c4980a0fb",
  createDate: "2025-07-01 12:00:00",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier for this record                              | 123e4567-5aae-4315-b68e-230c4b448f3b                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag.  Valid values are [0,1]            |                                                                |
| `editDate`                                                     | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2025-07-01 12:00:00                                            |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-62f7-4c3a-89ae-230c4c3d67db                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-241a-4351-a101-230c4827532b                           |
| `editByStaffUuid`                                              | *any*                                                          | :heavy_minus_sign:                                             | UUID of Staff Member who last modified record                  | 123e4567-7f77-474a-ba4d-230c4980a0fb                           |
| `createDate`                                                   | *any*                                                          | :heavy_minus_sign:                                             | Timestamp at which record was last modified                    | 2025-07-01 12:00:00                                            |