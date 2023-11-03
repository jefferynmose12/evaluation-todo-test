For the code: https://github.com/jefferynmose12/evaluation-todo-test

For the web app: https://evaluation-todo-test.vercel.app/

This project was built using React and Typescript.

Firstly, you install the packages with #npm install# and then you run it with #npm start#.

Secondly, about the project:

It's more like a todo app, but cover more than that. It allows you create a user and each of these users have their details on them which are first name, last name, email, role and status.

Firstly, when you arrive at the home page, you get to see the list of users, then you see a button above which state "Create a User". This button takes you to a a page where you can insert the user details and also those inputs have some validations to make sure you put in a very good and structured detail. After filling the form and clicking on "ADD USER", it takes you back to the home page where you have the users and the users are then stored on your local storage.

This homepage has a list of functionalities which are:

1. Search bar and filter by first name or last name: This function works hand in hand, a user can be able to search either by first name or last name by changing the fiter box to first name or last name. But by default, it's in first Name.

2. Fiter by Role and Status(which are like categories function): Right above the list of users we have the fiter role and status, this function helps a user filter data either by role or status.

3. Table of Users: Here we have the list of users and there details. We also have actions at the right-end. This actions are copy, edit and delete icons. 

The Copy, copies some details of the user which are the first name, last name and email to clipbroad. The Edit allows a user to be able to edit any user in there, after clicking on the edit, some inputs and select inputs pops up and it then allows the user to change the user details and you can either save it with the save icon and it being saved on local storage or cancel it with the cancel icon then return to the previous details. The Delete helps you remove a user from the list and also remove it from the local storage.

Some additional dependencies where installed to aid the application which are lodash, formik and yup for form, react router for router and navigation, react-select for auto-complete-selection, react icons and react-copy-to-clipboard for the copying of user details function.

A single test was built for navigating.

Each component style has a .css file.

For state management, React context API was used and for some logic custom react hooks where used.