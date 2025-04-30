<!-- Start SDK Example Usage [usage] -->
```typescript
import { ServiceM8 } from "servicem8";

const serviceM8 = new ServiceM8({
  security: {
    apiKeyAuth: process.env["SERVICEM8_API_KEY_AUTH"] ?? "",
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