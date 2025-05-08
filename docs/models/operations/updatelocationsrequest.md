# UpdateLocationsRequest

## Example Usage

```typescript
import { UpdateLocationsRequest } from "servicem8/models/operations";

let value: UpdateLocationsRequest = {
  uuid: "ac85e73d-8f41-4f46-8322-919804d725ea",
  location: {
    name: "<value>",
    uuid: "123e4567-f17b-4d57-a51e-22bcbb0abf4b",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `uuid`                                                               | *string*                                                             | :heavy_check_mark:                                                   | UUID of the Location                                                 |
| `location`                                                           | [components.LocationInput](../../models/components/locationinput.md) | :heavy_check_mark:                                                   | Location fields to update                                            |