# UpdateSecurityRolesRequest

## Example Usage

```typescript
import { UpdateSecurityRolesRequest } from "servicem8/models/operations";

let value: UpdateSecurityRolesRequest = {
  uuid: "6e56caba-8c3c-495e-9cd6-d570c3993688",
  securityRole: {
    name: "<value>",
    uuid: "123e4567-76a0-4c69-af8f-2308eb9885ab",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the Security Role                                                    |
| `securityRole`                                                               | [components.SecurityRoleInput](../../models/components/securityroleinput.md) | :heavy_check_mark:                                                           | Security Role fields to update                                               |