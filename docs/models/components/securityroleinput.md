# SecurityRoleInput

## Example Usage

```typescript
import { SecurityRoleInput } from "servicem8/models/components";

let value: SecurityRoleInput = {
  uuid: "123e4567-1b02-4623-a457-22b56bc1e05b",
  name: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-1b02-4623-a457-22b56bc1e05b                                           |
| `active`                                                                       | [components.SecurityRoleActive](../../models/components/securityroleactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name given to the security role                                            |                                                                                |
| `roleDescription`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |