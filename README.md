# dreamroots-api

An API to store numbers in files built using `nodejs` and `expressjs`. This API exposes the following endpoints:

1. `GET /numbers`
2. `POST /numbers`

## Getting started

Clone the repository and install npm packages using

```bash
npm ci
```

Start the server on port 3000 using

```bash
npm start
```

## Endpoints

### 1. GET /numbers

This endpoint returns a list of numbers stored in files A, B, C, and D. The response contains file path and the number stored in that file. The `number` field would be `undefined` if the file is either inaccessible or doesn't exist yet.

**Sample response**

```json
{
  "numbers": [
    {
      "path": "/Users/johndoe/dreamroots-api/files/A",
      "number": 123
    },
    {
      "path": "/Users/johndoe/dreamroots-api/files/B"
    },
    {
      "path": "/Users/johndoe/dreamroots-api/files/C",
      "number": 70
    },
    {
      "path": "/Users/johndoe/dreamroots-api/files/D",
      "number": 14
    }
  ]
}
```

### 1. POST /numbers

This endpoint stores a number in a file based on the business logic overwriting any existing data in the file (if there is any). 

The response contains file path and the number stored in that file. The `number` field would be `undefined` if the file is either inaccessible or doesn't exist yet.

**Sample request body**

```json
{
  "number": 5
}
```

**Sample response**

```json
{
    "msg": "Number has been stored"
}
```

## Postman Examples Scenarios

### 1. GET /numbers

1. When no numbers are stored in any files

   ![When no numbers are stored in any files](./docs/1.%20get-numbers-no-files.png)

2. When numbers are stored in files

    ![When numbers are stored in files](./docs/2.%20get-numbers-stored-numbers.png)

### 2. POST /numbers

1. When no request body is sent

   ![When no request body is sent](./docs/1.%20post-numbers-no-body.png)

2. When invalid request body is sent

    ![When invalid request body is sent](./docs/2.%20post-numbers-invalid-body.png)

3. When a valid request body is sent

    ![When a valid request body is sent](./docs/3.%20post-numbers-valid-number.png)

4. When a request number is out of range

    ![When a request number is out of range](./docs/4.%20post-numbers-out-of-range-number-1.png)

    ![When a request number is out of range](./docs/4.%20post-numbers-out-of-range-number-2.png)
