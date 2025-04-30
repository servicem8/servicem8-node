# Note

## Example Usage

```typescript
import { Note } from "servicem8/models/components";

let value: Note = {
  uuid: "123e4567-1aff-4dcf-a60e-22b56d6ddb3b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  relatedObjectUuid: "123e4567-7ac1-40f7-a428-22b562158b4b",
  actionCompletedByStaffUuid: "123e4567-a084-49fb-b71b-22b5691b3c7b",
  editByStaffUuid: "123e4567-aa6d-4977-90a1-22b56225970b",
  createDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Record UUID key                                                | 123e4567-1aff-4dcf-a60e-22b56d6ddb3b                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]   |                                                                |
| `editDate`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Record last modified timestamp                                 | YYYY-MM-DD HH:MM:SS                                            |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-7ac1-40f7-a428-22b562158b4b                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-a084-49fb-b71b-22b5691b3c7b                           |
| `editByStaffUuid`                                              | *string*                                                       | :heavy_minus_sign:                                             | Staff Member who last modified record                          | 123e4567-aa6d-4977-90a1-22b56225970b                           |
| `createDate`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Record creation timestamp                                      | YYYY-MM-DD HH:MM:SS                                            |