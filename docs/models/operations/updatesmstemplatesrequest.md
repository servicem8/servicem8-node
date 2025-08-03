# UpdateSMSTemplatesRequest

## Example Usage

```typescript
import { UpdateSMSTemplatesRequest } from "servicem8/models/operations";

let value: UpdateSMSTemplatesRequest = {
  uuid: "148094e8-1776-4912-988b-3fdd8fc6b61c",
  smsTemplate: {
    uuid: "123e4567-e0b2-45d6-a9bb-2313ff4ce78b",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `uuid`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | UUID of the SMS Template                                                   |
| `smsTemplate`                                                              | [components.SmsTemplateInput](../../models/components/smstemplateinput.md) | :heavy_check_mark:                                                         | SMS Template fields to update                                              |