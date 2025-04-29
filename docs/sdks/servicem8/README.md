# ServiceM8 SDK

## Overview

ServiceM8 API: Move your app forward with the ServiceM8 API



## Limits and Throttling
To ensure continuous quality of service, API usage can be subject to throttling. The throttle will be applied once an API consumer reaches a certain 
threshold in terms of a maximum number of requests per minute. Most clients will never hit this threshold, but those that do, will get met by a 
HTTP 429 Too Many Requests response code. 
 
There is a limit of 180 requests per minute, if you reach this you will receive a HTTP 429 with a text body of "Number of allowed API requests per minute exceeded".
There is a limit of 20000 requests per day, if you reach this you will receive a HTTP 429 with a text body of "Number of allowed API requests per day exceeded".

We encourage all API developers to anticipate this error, and take appropriate measures like e.g. using a cached value from a previous call, or passing on a message to the end user that gets subjected to this behaviour (if any).

Limits are per Addon per account.


### Available Operations
