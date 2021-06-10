## Interview Challenge

This repo was created as a technical assessment for part of an interview for a software startup located in Austin, TX.

### Table of Contents

* [Application Setup](#Application-setup)

* [Running the application](#Running-the-application)

* [Notes](#notes)

### Application setup

To set up this application, you will need to do the following:

* Ensure you have Node.js and NPM installed on your machine.

* Clone this repo onto your local machine.

* Install deps. You will need to run this twice. Once for the server app and again for the client app.

### Running the application

The server and the client are separate applications and can both be run independently on different ports. Traffic is routed to the server via npm proxy from the client.

To start this application, you will need to do the following:

* From the root directory, run `npm run start:server`

* From the root directory, run `npm run start:client`

From there the client application should be running on port 3000.

You can also open another terminal tab and navigate to `server/saved_filed` to manage all the uploaded files.

### Notes

Rome wasn't built in a day, but this application was. As a result there are a LOT of things I would like to redo if I didn't have a mere 48 hours (on top of my regular job, mind you! It really was more like 24 hours max.) to build this.

This application does meet the original spec in that it does the following:

  * User can upload files and store them using API.

  * User can search for files using input box and API.

  * User can see list of all uploaded documents.

  * User can only upload Documents and images.

And here are the things I still need to do:

* TESTS! This application desperately needs tests. The API is functional, but has no API tests to ensure the endpoints handle failures gracefully. Likewise none of the components have any unit tests at all.

* Typedefs. Given more time I would have LOVED to do all this with Typescript instead of plain JS. And even with plain JS, things would have been much nicer with JSDOC standard defs throughout the code.

* Styling. It's rudimentary at best. The upload success modal is awful. And I didn't get a chance to make this mobile-responsive. As is, it doesn't look good below 400px.

* Features. There's a lot of places I've marked `TODO:` throughout the application. These are again, things I would have liked to do if I had more time. I would like a user to have the ability to rename files, download files, delete files, and preview files.

* Scalability/Robustness. Currently we're just getting ALL the documents. This would get out of hand if a user had thousands of files. So things like a limit for display (results per page, user selectable) and API fetching queries (to fetch only relevant files instead of full list) would be nice. But it is not possible to build Google Drive in a day.