# RequiresAssignment

Determines if jobs in this queue require assignment to staff members. If true, jobs must be explicitly assigned to staff. If false, jobs are visible to all staff..  Valid values are [0,1]

## Example Usage

```typescript
import { RequiresAssignment } from "servicem8/models/components";

let value: RequiresAssignment = 1;
```

## Values

```typescript
0 | 1
```