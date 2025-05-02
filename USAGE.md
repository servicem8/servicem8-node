<!-- Start SDK Example Usage [usage] -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8();

async function run() {
  const result = await serviceM8.allocationWindows.listAllocationWindows({
    apiKey: process.env["SERVICEM8_API_KEY"] ?? "",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->