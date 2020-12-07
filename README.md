# Quote of the Day

Random quote of the day service. Uses [They Said So Quotes API](https://quotes.rest/). The following endpoints are available

| Method | Endpoint | Request | Response | 
| ------ | -------- | ------- | -------- |
| `GET`  | `/`      |         | `string` | 
| `POST` | `/save`  | `json`<sup>*</sup>| `json`<sup>**</sup>|
| `GET`  | `/saved` |         | `string` |

<sup>*</sup>
```json
{
  "quote": string,
  "author: string
}
```

<sup>**</sup>
```json
{
  "message": string
}
```


## Running with Docker

The service requires Docker to run, to provide a Redis instance. To run the service:

```bash
$ docker-compose up
```

This will deploy a stack with the API on port `3000`. 

## TODO 

- [ ] Clean up API 
- [ ] Add frontend design 
- [ ] Create Dockerfile for non-ARM architectures
- [ ] Tests and things

