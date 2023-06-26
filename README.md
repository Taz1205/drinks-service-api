<<<<<<< HEAD
# Backend Exploration: TypeScript Practice with Drinks Service API using TDD approach

## Before you start

npm install

## Prerequisite

👉 🔴 Use the command `node -v` and ensure you are running **_Node 18 or higher_** or this application will not work!

👉 If you're on `Node 18.12.0` or less then you will get some irritating warnings about "experimental features" in the terminal. You can remove these by upgrading to `Node 18.13.0` or above.

## Introduction

In this project we’ll use the ExpressJS library to create a Web API to serve back JSON
Responses based on a HTTP Request. We will be using a Test-Driven approach.

1️⃣Create a new node project

2️⃣Configure gitignore

## 3️⃣Install dependencies

npm install typescript@4.9.4 ts-node@10.9.1 nodemon@2.0.20
npm install -D jest@29.3.1 ts-jest@29.0.3 @types/jest@29.2.5 @types/node@18.11.18
npm install -D supertest@6.3.3 @types/supertest@2.0.12
npm install express@4.18.2
npm install @types/express@4.17.15

3️⃣💠󰍵 Configure Jest and TypeScript

👉npx ts-jest config:init
👉 Add a file called tsconfig.json to the root of your project.

4️⃣Version control

git init -b main
git add -A && git commit -m "feat: Initial project setup"

5️⃣Create the Home Controller and the
GET Endpoint for / to Give a String
Response

Write a test for the / API Endpoint

6️⃣Create the Coffee Controller and the
GET Endpoint for /coffeelover

7️⃣Create a GET Endpoint to serve JSON
data back as a Response to a Request
with a Request Parameter (Request
Param)

8️⃣Refactoring our API to MVC and
introduce a separation of concerns

9️⃣Write extra tests for the coffee
controller and push to GitHub

### Running as a Full Server

Here we simply import the app server we’ve been building and we start it listening on
port 3000.

👉 Start your server by running start

- npm start

You should now be able to navigate to <http://localhost:3000/> and see your wonderful
API. 🎉
Let’s try some of the other end points 🙌
👉 Try navigating to <http://localhost:3000/coffeelover/> and
<http://localhost:3000/coffee/?coffeeName=mocha> too
👉 You could also call those endpoints using Postman!
👉 What happens if you try to GET from a non-existent endpoint? 🤔
👉 Git commit your code to version control
