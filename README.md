# Http requests React -> Node.js

This is a simple app, i created to fetch data between Node and React.
Is a place picker app i previously created with local storage, the only difference is that we will be using Node.js to fetch data. 

How to try this app ? 

- clone the project in your local machine or in github codespaces.
- then run the following commands in 2 different terminal.

``` bash

# open the terminal and run:
npm i 
cd src/
npm run dev 

# open a new terminal and run: 
cd backend/
npm i 
node app.js
```
This app is purely for educational purpose to learn more about http requests with react. 

# HTTP Methods and JSON

## HTTP Methods

### GET

Used to fetch data from the server. It requests information without modifying anything on the server.

### PUT

Used to send data from the client to the server, replacing or updating existing data. Each time you call a PUT request, the server updates the old data with the new one.

This is useful when you need to constantly update data, but in real-world applications it can be computationally expensive for the server if updates are frequent or the data is large.

## JSON.stringify

I also learned about:

```
JSON.stringify(value, replacer, 2)
```

* value -> the object or array to convert into JSON
* replacer -> optional; allows you to filter or transform properties
* 2 -> optional; adds pretty-printing with 2 spaces for indentation, making the JSON more readable

### Example

Input : 

```
const obj = { id: 1, name: "Anna", password: "secret" };
console.log(JSON.stringify(obj, name, 2));
```

Output will be :

```
{
  "id": 1,
  "name": "Anna",
}
```
Basically, the second argument (replacer) allows you to specify only the properties you want to include in the resulting JSON.

This is very helpful when you want to store some dummy data in a package JSON file or a buffer, and then use only specific properties for encryption or other purposes.