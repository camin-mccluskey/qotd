# Quote of the Day

Random quote of the day web app. Uses [They Said So Quotes API](https://quotes.rest/). React frontend, Express backend. The following endpoints are exposed. 

| Method | Endpoint        | Request            | Response            | 
| ------ | --------------- | ------------------ | ------------------- |
| `GET`  | `/quotes`       |                    | `string`            |
| `POST` | `/quotes`       | `json`<sup>*</sup> | `json`<sup>**</sup> |
| `GET`  | `/quotes/saved` |                    | `string`            |

<sup>*</sup>
```json
{
  "quote": "Do or do not. There is no try.",
  "author": "Yoda"
}
```

<sup>**</sup>
```json
{
  "message": "OK"
}
```


## Running with Docker

### Server 

The service requires Docker to run, to provide a Redis instance. To run the service:

```bash
$ cd app && npm run start:<env>
```

This will deploy a stack with the API on port `5000`.

### Client

The client can be run outside Docker if necessary. To run with Docker.

```bash
$ cd client && npm run start:<env>
```

This will deloy a React site on port `3000`.

`env` is either `pi` for ARM architectures or `macos` for Intel/AMD.

## TODO 

- [x] Clean up API 
- [ ] Add frontend design 
- [x] Create Dockerfile for non-ARM architectures
- [ ] Tests and things

