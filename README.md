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


## Running the Service(s)

### Server 

The service requires Docker to run, to provide a Redis instance. To run the service:

```bash
$ cd app && npm run start:<env>
```

This will deploy a stack with the API on port `5000`.

### Client

The client can be run outside Docker if necessary. To do so, run:

```bash
$ cd client && npm start
```
To run with Docker:

```bash
$ cd client && docker-compose -f docker-compose.<env>.yml up
```

This will deloy a React site on port `3000`.

`env` is either `pi` for ARM architectures or `macos` for Intel/AMD.

### Combined Service

To run the entire service together. This will run a Docker stack.

```bash
$ npm run start:<env>
```

## TODO 

- [x] Clean up API 
- [ ] Add frontend design 
- [x] Create Dockerfile for non-ARM architectures
- [ ] Tests and things

