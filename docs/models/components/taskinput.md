# TaskInput

## Example Usage

```typescript
import { TaskInput } from "servicem8/models/components";

let value: TaskInput = {
  uuid: "123e4567-dc43-4493-9ca7-22b4d0090a8b",
  dueDate: "YYYY-MM-DD",
  name: "<value>",
  relatedObjectUuid: "123e4567-d2a6-4591-a6dd-22b4d017cefb",
  completedTimestamp: "YYYY-MM-DD HH:MM:SS",
  completedByStaffUuid: "123e4567-fb87-4daf-8cb3-22b4dc2a492b",
  assignedToStaffUuid: "123e4567-698c-4d37-8aca-22b4dea21ccb",
  createdByStaffUuid: "123e4567-9b5f-4964-ad21-22b4dd2c51db",
  createDate: "YYYY-MM-DD HH:MM:SS",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `uuid`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Record UUID key                                                | 123e4567-dc43-4493-9ca7-22b4d0090a8b                           |
| `active`                                                       | [components.TaskActive](../../models/components/taskactive.md) | :heavy_minus_sign:                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]   |                                                                |
| `dueDate`                                                      | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | YYYY-MM-DD                                                     |
| `taskDetails`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `relatedObject`                                                | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `relatedObjectUuid`                                            | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-d2a6-4591-a6dd-22b4d017cefb                           |
| `taskComplete`                                                 | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `completedTimestamp`                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | YYYY-MM-DD HH:MM:SS                                            |
| `completedByStaffUuid`                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-fb87-4daf-8cb3-22b4dc2a492b                           |
| `assignedToStaffUuid`                                          | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-698c-4d37-8aca-22b4dea21ccb                           |
| `lng`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `lat`                                                          | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `createdByStaffUuid`                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            | 123e4567-9b5f-4964-ad21-22b4dd2c51db                           |
| `createDate`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Record creation timestamp                                      | YYYY-MM-DD HH:MM:SS                                            |