# Note

## Example Usage

```typescript
import { Note } from "servicem8/models/components";

let value: Note = {
  uuid: "123e4567-8906-4e88-b7b5-22b56416009b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  relatedObjectUuid: "123e4567-2597-4098-8bcb-22b56eb4826b",
  actionCompletedByStaffUuid: "123e4567-5ace-4d75-b290-22b5693e564b",
  editByStaffUuid: "123e4567-675f-404f-b4e3-22b567ed69db",
  createDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Record UUID key                                                | 123e4567-8906-4e88-b7b5-22b56416009b                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]   |                                                                |
| `editDate`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Record last modified timestamp                                 | YYYY-MM-DD HH:MM:SS                                            |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-2597-4098-8bcb-22b56eb4826b                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-5ace-4d75-b290-22b5693e564b                           |
| `editByStaffUuid`                                              | *string*                                                       | :heavy_minus_sign:                                             | Staff Member who last modified record                          | 123e4567-675f-404f-b4e3-22b567ed69db                           |
| `createDate`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Record creation timestamp                                      | YYYY-MM-DD HH:MM:SS                                            |