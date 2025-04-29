# Note

## Example Usage

```typescript
import { Note } from "servicem8/models/components";

let value: Note = {
  uuid: "123e4567-5a0e-45f3-a86c-22b4ddd26b6b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  relatedObjectUuid: "123e4567-6fec-4e9d-9907-22b4d584ec5b",
  actionCompletedByStaffUuid: "123e4567-8e1f-43a6-a568-22b4d500d8eb",
  editByStaffUuid: "123e4567-c340-48ad-a329-22b4d756725b",
  createDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Record UUID key                                                | 123e4567-5a0e-45f3-a86c-22b4ddd26b6b                           |
| `active`                                                       | [components.NoteActive](../../models/components/noteactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]   |                                                                |
| `editDate`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Record last modified timestamp                                 | YYYY-MM-DD HH:MM:SS                                            |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-6fec-4e9d-9907-22b4d584ec5b                           |
| `note`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionRequired`                                               | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `actionCompletedByStaffUuid`                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-8e1f-43a6-a568-22b4d500d8eb                           |
| `editByStaffUuid`                                              | *string*                                                       | :heavy_minus_sign:                                             | Staff Member who last modified record                          | 123e4567-c340-48ad-a329-22b4d756725b                           |
| `createDate`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Record creation timestamp                                      | YYYY-MM-DD HH:MM:SS                                            |