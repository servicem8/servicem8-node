# UpdateEmailTemplatesRequest

## Example Usage

```typescript
import { UpdateEmailTemplatesRequest } from "servicem8/models/operations";

let value: UpdateEmailTemplatesRequest = {
  uuid: "294097a8-e371-45a8-ad02-d6ffca8fc57b",
  emailTemplate: {
    uuid: "123e4567-2d18-4e5a-a3b4-231b2c9ed8eb",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `uuid`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | UUID of the Email Template                                                     |
| `emailTemplate`                                                                | [components.EmailTemplateInput](../../models/components/emailtemplateinput.md) | :heavy_check_mark:                                                             | Email Template fields to update                                                |