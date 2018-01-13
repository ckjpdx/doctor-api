# BetterDoctor API
_by Chris Knight Johnson_
## Description
This simple app gathers some input from the user and performs a search for doctors using the BetterDoctor API. The user can enter a location, ailment, and name of doctor.
## User Story
* User can search for a medical issue and receive doctors relevant to treatment.
* User can enter a doctor name and receive a list of matching doctors.
* User searches will show doctor names, office address, contact info, and if the doctor is taking new patients.
* User is informed when there is an issue contacting the server and will return the server status.
* User is notified if their match yields nothing.
* User can see the gender of the doctors returned from a search by looking at the doctor image
## BDD Specs
| Description | Input | Output |
| --- | --- | --- |
If a user enters information that doesnt return any matches a message will display | RoboDoc | Nothing matched your search! |
## Flaws
The API location query seems to be a bit lacking. It only seems to work for certain states when entering a 2 digit state code ie 'NY'. Some states do not have any doctors listed whatsoever, so getting search results back can depend heavily on where the user searches.
## Dev Setup
_if you want to download and modify code, follow these steps. the $ sign means to run it as a command line in the terminal, do not include the $!!!_
__In Terminal:__
* $ cd ~/desktop
* $ git clone https://github.com/noodlebrains/doctor-api.git
* $ npm i
* $ bower i
* $ atom .
(or open in other editor)
