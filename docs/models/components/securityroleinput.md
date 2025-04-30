# SecurityRoleInput

## Example Usage

```typescript
import { SecurityRoleInput } from "servicem8/models/components";

let value: SecurityRoleInput = {
  uuid: "123e4567-6942-412d-a1f0-22b56420e52b",
  name: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Record UUID key                                                                | 123e4567-6942-412d-a1f0-22b56420e52b                                           |
| `active`                                                                       | [components.SecurityRoleActive](../../models/components/securityroleactive.md) | :heavy_minus_sign:                                                             | Record active/deleted flag. <br/><br/>Valid values are [0,1]                   |                                                                                |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name given to the security role                                            |                                                                                |
| `roleDescription`                                                              | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |