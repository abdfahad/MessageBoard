# MessageBoard

API Name: Login API
Description: The Login API is used to authenticate a user based on username or email and password. A JSON Web Token (JWT) is issued after successful authentication which will be used in further requests for authorization.

Request Method: POST
Request URL: /login
Request Parameters:

username: (string) (Optional) The username of the user.
email: (string) (Optional) The email address of the user.
password: (string) The password of the user.
Response:

status code 200: Successful authentication. A JWT token is returned along with the user object in JSON format.
status code 400: Failed authentication. The reason for failure is given in the message field of the JSON object.
API Name: Verify Registration Code API
Description: The Verify Registration Code API is used to verify the registration code sent to a user's mobile number. A user ID and the code are sent in the request body. If the code is valid, the user is marked as verified.

Request Method: POST
Request URL: /verifyRegCode
Request Parameters:

id: (number) The user ID of the user to be verified.
code: (string) The code sent to the user's mobile number.
Response:

status code 200: Verification successful. The message "Verification Successful" is returned in JSON format.
status code 400: Verification failed. The reason for failure is given in the message field of the JSON object.
API Name: Send Verification SMS API
Description: The Send Verification SMS API is used to send a verification code to a user's mobile number. A user ID and mobile number are sent in the request body. If the SMS is sent successfully, the verification code is persisted in the database.

Request Method: POST
Request URL: /sendVerificationSMS
Request Parameters:

id: (number) The user ID of the user.
mobileNumber: (string) The mobile number of the user.
Response:

status code 200: SMS sent successfully. The message "SMS with code sent" is returned in JSON format.
status code 400: SMS not sent. The reason for failure is given in the message field of the JSON object.
