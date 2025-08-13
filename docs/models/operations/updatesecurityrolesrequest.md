# UpdateSecurityRolesRequest

## Example Usage

```typescript
import { UpdateSecurityRolesRequest } from "servicem8/models/operations";

let value: UpdateSecurityRolesRequest = {
  uuid: "6e56caba-8c3c-495e-9cd6-d570c3993688",
  securityRole: {
    name: "<value>",
    uuid: "123e4567-c318-492c-b6c2-231ef4f93a5b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Security Role                                                    |
| `securityRole`                                                               | [components.SecurityRoleInput](../../models/components/securityroleinput.md) | :heavy_check_mark:                                                           | Security Role fields to update                                               |