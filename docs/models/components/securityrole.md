# SecurityRole

## Example Usage

```typescript
import { SecurityRole } from "servicem8/models/components";

let value: SecurityRole = {
  uuid: "123e4567-1b02-4623-a457-22b56bc1e05b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  name: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-1b02-4623-a457-22b56bc1e05b                                           |
| `active`                                                                       | [components.SecurityRoleActive](../../models/components/securityroleactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `editDate`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Record last modified timestamp                                                 | YYYY-MM-DD HH:MM:SS                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name given to the security role                                            |                                                                                |
| `roleDescription`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |