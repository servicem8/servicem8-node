# UpdateSecurityRolesRequest

## Example Usage

```typescript
import { UpdateSecurityRolesRequest } from "servicem8/models/operations";

let value: UpdateSecurityRolesRequest = {
  uuid: "6e56caba-8c3c-495e-9cd6-d570c3993688",
  securityRole: {
    uuid: "123e4567-018a-400f-8394-22b4d10ac42b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Security Role                                                    |
| `securityRole`                                                               | [components.SecurityRoleInput](../../models/components/securityroleinput.md) | :heavy_check_mark:                                                           | Security Role fields to update                                               |