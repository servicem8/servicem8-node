# UpdateEmailTemplatesRequest

## Example Usage

```typescript
import { UpdateEmailTemplatesRequest } from "servicem8/models/operations";

let value: UpdateEmailTemplatesRequest = {
  uuid: "294097a8-e371-45a8-ad02-d6ffca8fc57b",
  emailTemplateCreate: {
    name: "<value>",
    uuid: "123e4567-ec5c-4504-a3d9-234972d017eb",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `uuid`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | UUID of the Email Template                                                       |
| `emailTemplateCreate`                                                            | [components.EmailTemplateCreate](../../models/components/emailtemplatecreate.md) | :heavy_check_mark:                                                               | Email Template fields to update                                                  |