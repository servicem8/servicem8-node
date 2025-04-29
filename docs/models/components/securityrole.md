# SecurityRole

## Example Usage

```typescript
import { SecurityRole } from "servicem8/models/components";

let value: SecurityRole = {
  uuid: "123e4567-018a-400f-8394-22b4d10ac42b",
  editDate: "YYYY-MM-DD HH:MM:SS",
  name: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-018a-400f-8394-22b4d10ac42b                                           |
| `active`                                                                       | [components.SecurityRoleActive](../../models/components/securityroleactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `editDate`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Record last modified timestamp                                                 | YYYY-MM-DD HH:MM:SS                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name given to the security role                                            |                                                                                |
| `roleDescription`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |