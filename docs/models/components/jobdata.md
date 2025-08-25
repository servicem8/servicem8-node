# JobData

Structured job data that will be merged into json_data when converting the message to a job

## Example Usage

```typescript
import { JobData } from "servicem8/models/components";

let value: JobData = {};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `contactFirst`                         | *string*                               | :heavy_minus_sign:                     | Job contact first name                 |
| `contactLast`                          | *string*                               | :heavy_minus_sign:                     | Job contact last name                  |
| `companyName`                          | *string*                               | :heavy_minus_sign:                     | Company/customer name                  |
| `email`                                | *string*                               | :heavy_minus_sign:                     | Primary email address                  |
| `mobile`                               | *string*                               | :heavy_minus_sign:                     | Mobile phone number                    |
| `phone1`                               | *string*                               | :heavy_minus_sign:                     | Primary phone number                   |
| `phone2`                               | *string*                               | :heavy_minus_sign:                     | Secondary phone number                 |
| `billingContactFirst`                  | *string*                               | :heavy_minus_sign:                     | Billing contact first name             |
| `billingContactLast`                   | *string*                               | :heavy_minus_sign:                     | Billing contact last name              |
| `billingEmail`                         | *string*                               | :heavy_minus_sign:                     | Billing email address                  |
| `billingMobile`                        | *string*                               | :heavy_minus_sign:                     | Billing mobile number                  |
| `billingAttention`                     | *string*                               | :heavy_minus_sign:                     | Billing attention line                 |
| `jobDescription`                       | *string*                               | :heavy_minus_sign:                     | Description of the job/work to be done |
| `jobAddress`                           | *string*                               | :heavy_minus_sign:                     | Service location address               |
| `billingAddress`                       | *string*                               | :heavy_minus_sign:                     | Billing address                        |
| `workDoneDescription`                  | *string*                               | :heavy_minus_sign:                     | Description of completed work          |