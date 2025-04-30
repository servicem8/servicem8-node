# Task

## Example Usage

```typescript
import { Task } from "servicem8/models/components";

let value: Task = {
  uuid: "123e4567-f57c-4f40-9407-22b56eb0a86b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  dueDate: "YYYY-MM-DD",
  name: "<value>",
  relatedObjectUuid: "123e4567-d679-4a40-81f3-22b56fb3a68b",
  completedTimestamp: "YYYY-MM-DD HH:MM:SS",
  completedByStaffUuid: "123e4567-e42c-4cad-9b63-22b56fdb88eb",
  assignedToStaffUuid: "123e4567-aeb9-48fc-a041-22b56b39fe5b",
  createdByStaffUuid: "123e4567-e34e-4873-92a2-22b56ca0349b",
  createDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Record UUID key                                                | 123e4567-f57c-4f40-9407-22b56eb0a86b                           |
| `active`                                                       | [components.TaskActive](../../models/components/taskactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]   |                                                                |
| `editDate`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Record last modified timestamp                                 | YYYY-MM-DD HH:MM:SS                                            |
| `dueDate`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | YYYY-MM-DD                                                     |
| `taskDetails`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-d679-4a40-81f3-22b56fb3a68b                           |
| `taskComplete`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `completedTimestamp`                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | YYYY-MM-DD HH:MM:SS                                            |
| `completedByStaffUuid`                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-e42c-4cad-9b63-22b56fdb88eb                           |
| `assignedToStaffUuid`                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-aeb9-48fc-a041-22b56b39fe5b                           |
| `lng`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `lat`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `createdByStaffUuid`                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-e34e-4873-92a2-22b56ca0349b                           |
| `createDate`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Record creation timestamp                                      | YYYY-MM-DD HH:MM:SS                                            |