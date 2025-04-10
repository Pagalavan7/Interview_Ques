Instructions to run the application locally:

node command to run the application:
1.npm install
2.npm run start

api used:
for signup => http://localhost:3000/singup
for login => http://localhost:3000/login
for basic filtering => http://localhost:3000/auth/filter?userRole=User  //filter based on user role..

A jwt token will be generated during signup and login.
I have implemented password hashing functionality during the signup and verifying the hashing password during login.
 I implemented authentication middleware to validate jwt while doing filtering..
