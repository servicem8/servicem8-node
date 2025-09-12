# JobStatus

Current status of the job. Controls where the Job appears in the Dispatch Board..  Valid values are [Quote,Work Order,Unsuccessful,Completed]

## Example Usage

```typescript
import { JobStatus } from "servicem8/models/components";

let value: JobStatus = "Work Order";
```

## Values

```typescript
"Quote" | "Work Order" | "Unsuccessful" | "Completed"
```