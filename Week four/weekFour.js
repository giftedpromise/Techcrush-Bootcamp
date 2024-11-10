/*
Backend Development:Node.js HTTP and FS Modules, and Introduction to Express.Js
Node.js HTTP Module
Getting started with servers

A URL (Uniform Resource Locator) is the web address used to locate resources on the internet. It is essential for
accessing websites, APIs, and other services. URLs are structured to convey the necessary information for identifying
and locating a specific resource. Now, let’s talk about components of a URL

Here's an example URL: https://www.example.com:8080/path/to/resource?query=search#section

Protocol (https://):

Specifies the protocol used for the connection, such as http, https, ftp, etc.

https stands for Hypertext Transfer Protocol Secure, which is an encrypted version of http.

Host (www.example.com):

The domain name or IP address of the server hosting the resource.

The www is a subdomain, while example.com is the main domain.

Port (:8080):

An optional part that specifies the port number on the server for the connection.

Common ports are 80 for HTTP and 443 for HTTPS; if these are used, they are typically omitted in the URL.

Path (/path/to/resource):

Indicates the specific path to a resource on the server.

It follows the domain and is structured like directories or folders.

Query String (?query=search):

Contains data passed to the server, typically in key-value pairs (key=value format).

Multiple parameters are separated by &, e.g., ?key1=value1&key2=value2.

The HTTP module in Node.js is a crucial component for building web servers, enabling the transfer
of data over the Hypertext Transfer Protocol (HTTP). This module allows developers to create
servers that can handle incoming requests and send appropriate responses back to clients.

Key Functions

Creating a Server: The primary function of the HTTP module is to create a server using
http.createServer(). This function takes a callback that executes whenever a request is received.

Handling Requests: The request object (req) contains information about the incoming request,
such as headers and URL. This allows you to tailor responses based on the request details.

Sending Responses: The response object (res) is used to send data back to the client. You can set
status codes (e.g., 200 for success) and headers (e.g., content type) before sending the actual
content.

We will be doing some examples in our usual app.js file in the next two slides.
*/
