# Assignment

Requirements:

In this assignment, you will create a simple server using Node.js. Your server should handle various routes and perform specific tasks based on incoming requests.


Instructions:


1. Server Setup:



Use the http module to create an HTTP server.
The server should listen on port 5500.


When the server starts, it should log a message to the console indicating that it is listening on port 5500.
2. Route Handling:



Home Page (/): When the server receives a request to the root URL (/), it should respond with the text: "This is the Home Page".

About Page (/about): When the server receives a request to the /about URL, it should respond with the text: "This is the About Page".


Contact Page (/contact): When the server receives a request to the /contact URL, it should respond with the text: "This is the Contact Page".
3. File Operations:


File Write (/file-write): When the server receives a request to the /file-write URL, use the fs.writeFile() method to create a file named demo.txt. The file should contain the text "hello world". After writing the file, send an appropriate response to the client.
4.Response Termination:



Ensure that you end the server response using res.end() for each request.


![Logo](result.png)
