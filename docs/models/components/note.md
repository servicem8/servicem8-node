# Note

## Example Usage

```typescript
import { Note } from "servicem8/models/components";

let value: Note = {
  uuid: "123e4567-8139-48dd-84e8-22b4d0e390cb",
  editDate: "YYYY-MM-DD HH:MM:SS",
  relatedObjectUuid: "123e4567-0ee6-4314-a56b-22b4d7c77efb",
  actionCompletedByStaffUuid: "123e4567-72a3-4634-b1c4-22b4d9083b4b",
  editByStaffUuid: "123e4567-27cb-4cca-8897-22b4d4bcf5db",
  createDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Record UUID key                                                | 123e4567-8139-48dd-84e8-22b4d0e390cb                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]   |                                                                |
| `editDate`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Record last modified timestamp                                 | YYYY-MM-DD HH:MM:SS                                            |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-0ee6-4314-a56b-22b4d7c77efb                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-72a3-4634-b1c4-22b4d9083b4b                           |
| `editByStaffUuid`                                              | *string*                                                       | :heavy_minus_sign:                                             | Staff Member who last modified record                          | 123e4567-27cb-4cca-8897-22b4d4bcf5db                           |
| `createDate`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Record creation timestamp                                      | YYYY-MM-DD HH:MM:SS                                            |