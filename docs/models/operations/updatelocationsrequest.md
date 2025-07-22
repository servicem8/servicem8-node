# UpdateLocationsRequest

## Example Usage

```typescript
import { UpdateLocationsRequest } from "servicem8/models/operations";

let value: UpdateLocationsRequest = {
  uuid: "ac85e73d-8f41-4f46-8322-919804d725ea",
  location: {
    name: "<value>",
    uuid: "123e4567-34f1-4e7b-9772-2308eda49fbb",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Location                                                 |
| `location`                                                           | [components.LocationInput](../../models/components/locationinput.md) | :heavy_check_mark:                                                   | Location fields to update                                            |