<!-- Start SDK Example Usage [usage] -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    oauth2: process.env["SERVICEM8_OAUTH2"] ?? "",
  },
});

async function run() {
  const result = await serviceM8.allocationWindows.listAllocationWindows();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->