# JobGeoIsValid

Indicates whether the geocoding for the job address is valid. If this is false, the lat, lng, and other geo_ fields should not be used. (Read only).  Valid values are [0,1]

## Example Usage

```typescript
import { JobGeoIsValid } from "servicem8/models/components";

let value: JobGeoIsValid = 0;
```

## Values

```typescript
0 | 1
```