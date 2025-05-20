# TEJ Fellowship Application Round 2 Project

## Overview
This project is a part of the TEJ Fellowship application process. The goal is to complete all the task as per the requirements and submit the project for review.

## Project Structure
Every task is organized in a seperate folder. Each folder contains the files related to that task.

## Task 1
It consist a html file which is a simple webpage.

## Task 2
It contains an extra css file including the file of task-1, which is used to style the webpage. The css file is linked to the html file.

## Task 3
It contains a javascript file which is used to add functionality to the webpage. The javascript file is linked to the html file.

## Task 4
It uses Django framework to create the webapplication. It uses the previous task files of html, css and javascript. To run the project, install Django and run the server using the command `python manage.py runserver`. The project will be available at `http://localhost:8000/`.

The api included are:
- `admin/`: Django admin panel.
- `submitBill`: API to submit a bill using Post method.
- `submit/<int:bill_id>`: API to get the bill using Get method with a bill_id.
- `api/bills`: API to get the all stored bills in Json format.
- `bills`: API to get the all stored bills in a table.

## Task 5
It is same as Task-4 with responsive calculation of the bill.