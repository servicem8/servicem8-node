# UpdateLocationsRequest

## Example Usage

```typescript
import { UpdateLocationsRequest } from "servicem8/models/operations";

let value: UpdateLocationsRequest = {
  uuid: "ac85e73d-8f41-4f46-8322-919804d725ea",
  locationCreate: {
    name: "<value>",
    uuid: "123e4567-8740-4050-b350-234828be1d8b",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `uuid`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | UUID of the Location                                                   |
| `locationCreate`                                                       | [components.LocationCreate](../../models/components/locationcreate.md) | :heavy_check_mark:                                                     | Location fields to update                                              |