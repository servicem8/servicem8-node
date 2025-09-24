# UpdateSMSTemplatesRequest

## Example Usage

```typescript
import { UpdateSMSTemplatesRequest } from "servicem8/models/operations";

let value: UpdateSMSTemplatesRequest = {
  uuid: "148094e8-1776-4912-988b-3fdd8fc6b61c",
  smsTemplateCreate: {
    name: "<value>",
    uuid: "123e4567-9dd6-43a8-874c-2348283ddc0b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the SMS Template                                                     |
| `smsTemplateCreate`                                                          | [components.SmsTemplateCreate](../../models/components/smstemplatecreate.md) | :heavy_check_mark:                                                           | SMS Template fields to update                                                |