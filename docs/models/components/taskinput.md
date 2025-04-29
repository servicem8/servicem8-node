# TaskInput

## Example Usage

```typescript
import { TaskInput } from "servicem8/models/components";

let value: TaskInput = {
  uuid: "123e4567-23f2-4a4c-99b4-22b4d56f813b",
  dueDate: "YYYY-MM-DD",
  name: "<value>",
  relatedObjectUuid: "123e4567-576f-4010-9711-22b4d7262f3b",
  completedTimestamp: "YYYY-MM-DD HH:MM:SS",
  completedByStaffUuid: "123e4567-529f-457a-b588-22b4d1e045cb",
  assignedToStaffUuid: "123e4567-1d55-481f-9f97-22b4d83c193b",
  createdByStaffUuid: "123e4567-37bb-4d5d-8826-22b4d5b5c9bb",
  createDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Record UUID key                                                | 123e4567-23f2-4a4c-99b4-22b4d56f813b                           |
| `active`                                                       | [components.TaskActive](../../models/components/taskactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]   |                                                                |
| `dueDate`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | YYYY-MM-DD                                                     |
| `taskDetails`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-576f-4010-9711-22b4d7262f3b                           |
| `taskComplete`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `completedTimestamp`                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | YYYY-MM-DD HH:MM:SS                                            |
| `completedByStaffUuid`                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-529f-457a-b588-22b4d1e045cb                           |
| `assignedToStaffUuid`                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-1d55-481f-9f97-22b4d83c193b                           |
| `lng`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `lat`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `createdByStaffUuid`                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-37bb-4d5d-8826-22b4d5b5c9bb                           |
| `createDate`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Record creation timestamp                                      | YYYY-MM-DD HH:MM:SS                                            |