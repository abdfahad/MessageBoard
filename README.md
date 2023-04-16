# MessageBoard

## Login

The Login API is used to authenticate a user based on username or email and password. A JSON Web Token (JWT) is issued after successful authentication which will be used in further requests for authorization.

**Request Method**: `POST`

**Request URL**: `/auth/login`

**Request Parameters**:

- `username`: (string) The username of the user.
- `email`: (string) (either the username or this) The email address of the user.
- `password`: (string) The password of the user.

**Response**:

- `status code 200`: Successful authentication. A JWT token is returned along with the user object in JSON format.
- `status code 400`: Failed authentication. The reason for failure is given in the message field of the JSON object.

---

## Verify Registration Code

The Verify Registration Code API is used to verify the registration code sent to a user's mobile number or email. A user ID and the code are sent in the request body. If the code is valid, the user is marked as verified.

**Request Method**: `POST`

**Request URL**: `/auth/verifyRegCode`

**Request Parameters**:

- `id`: (number) The user ID of the user to be verified.
- `code`: (string) The code sent to the user.

**Response**:

- `status code 200`: Verification successful. The message "Verification Successful" is returned in JSON format.
- `status code 400`: Verification failed. The reason for failure is given in the message field of the JSON object.

---

## Send Verification SMS

The Send Verification SMS API is used to send a verification code to a user's mobile number. A user ID and mobile number are sent in the request body. If the SMS is sent successfully, the verification code is persisted in the database.

**Request Method**: `POST`

**Request URL**: `/auth/sendVerificationSMS`

**Request Parameters**:

- `id`: (number) The user ID of the user.
- `mobileNumber`: (string) The mobile number of the user.

**Response**:

- `status code 200`: SMS sent successfully. The message "SMS with code sent" is returned in JSON format.
- `status code 400`: SMS not sent. The reason for failure is given in the message field of the JSON object.
