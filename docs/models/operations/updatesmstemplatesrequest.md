# UpdateSMSTemplatesRequest

## Example Usage

```typescript
import { UpdateSMSTemplatesRequest } from "servicem8/models/operations";

let value: UpdateSMSTemplatesRequest = {
  uuid: "148094e8-1776-4912-988b-3fdd8fc6b61c",
  smsTemplate: {
    uuid: "123e4567-230c-42d3-9dc3-231d2b9d6c5b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the SMS Template                                                   |
| `smsTemplate`                                                              | [components.SmsTemplateInput](../../models/components/smstemplateinput.md) | :heavy_check_mark:                                                         | SMS Template fields to update                                              |