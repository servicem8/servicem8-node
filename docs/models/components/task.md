# Task

## Example Usage

```typescript
import { Task } from "servicem8/models/components";

let value: Task = {
  uuid: "123e4567-ece3-44ac-92f9-22b566d83f9b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  dueDate: "YYYY-MM-DD",
  name: "<value>",
  relatedObjectUuid: "123e4567-d851-4442-b179-22b56fd2b45b",
  completedTimestamp: "YYYY-MM-DD HH:MM:SS",
  completedByStaffUuid: "123e4567-ac80-4057-adb7-22b56ade3aab",
  assignedToStaffUuid: "123e4567-a976-4d7d-a1c4-22b5673c4d3b",
  createdByStaffUuid: "123e4567-9a07-4eb5-9255-22b56447679b",
  createDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Record UUID key                                                | 123e4567-ece3-44ac-92f9-22b566d83f9b                           |
| `active`                                                       | [components.TaskActive](../../models/components/taskactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]   |                                                                |
| `editDate`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Record last modified timestamp                                 | YYYY-MM-DD HH:MM:SS                                            |
| `dueDate`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | YYYY-MM-DD                                                     |
| `taskDetails`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-d851-4442-b179-22b56fd2b45b                           |
| `taskComplete`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `completedTimestamp`                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | YYYY-MM-DD HH:MM:SS                                            |
| `completedByStaffUuid`                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-ac80-4057-adb7-22b56ade3aab                           |
| `assignedToStaffUuid`                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-a976-4d7d-a1c4-22b5673c4d3b                           |
| `lng`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `lat`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `createdByStaffUuid`                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-9a07-4eb5-9255-22b56447679b                           |
| `createDate`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Record creation timestamp                                      | YYYY-MM-DD HH:MM:SS                                            |