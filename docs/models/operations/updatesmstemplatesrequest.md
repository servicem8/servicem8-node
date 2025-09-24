# UpdateSMSTemplatesRequest

## Example Usage

```typescript
import { UpdateSMSTemplatesRequest } from "servicem8/models/operations";

let value: UpdateSMSTemplatesRequest = {
  uuid: "148094e8-1776-4912-988b-3fdd8fc6b61c",
  smsTemplateCreate: {
    name: "<value>",
    uuid: "123e4567-1c34-4ec6-8b56-23482ac0c97b",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `uuid`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | UUID of the SMS Template                                                     |
| `smsTemplateCreate`                                                          | [components.SmsTemplateCreate](../../models/components/smstemplatecreate.md) | :heavy_check_mark:                                                           | SMS Template fields to update                                                |