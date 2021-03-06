# AltTask

## Quick Start

The quickest way to get started with this boilerplate is to fork it into your own repo.
Get into the root of the application

```bash
cd AltTask/
```

Install dependencies:

```bash
$ npm install
```

Start the server:

```bash
$ npm start
```

View the website at: http://localhost:3000


## User Stories:

> ##### Mentor Name: Prashant

> ##### Mentee Name: Naman

### Prashant's Stories:

1. Prashant Should be able to Login/Register
2. Prashant should be able to add task
3. Prashant should be able to assign task to teams & individuals
4. Prashant should be able to see all tasks created/assigned/completed.
5. Prashant should be able to recieve notification when anyone marks task as complete.
6. Prashant should be able to assign deadlines(date & time) to task created.
7. Prashant should belong to an Organisation,
8. Prashant can have multiple teams,
9. Prashant have to share organisation contacts & teams with other mentors in organisation

### Naman's Stories:

1. Naman should be able to login/register
2. Naman should be able to see his pendings tasks & deadlines with priorities.
3. Naman should be able to add comment to task & mark it as complete when done.
4. Naman should be able to filter tasks based on priority & date of completion.
5. Naman should be able to see reports(how productive he is)
6. Naman should be able to recieve notifications before deadlines(6 hrs)

### ER diagram:

![](https://digitaliz.in/wp-content/uploads/2019/08/ER-Diagram.jpeg)

### SPRINT 1:

#### Backend:

1. Model Creation for Team/Tasks/User/People.
2. Login/Register routes for User. [Route: "/api/v1/login" && Route: "/api/v1/register"]
3. Handle OnBoarading
4. Create Task(POST)
   1. Assign Task to Individual/Team -- reference \_\_id of the individual/team
   2. Set a deadline to task -- Date
   3. Priority -- String
5. Add Teams/Individual to Individual Tasks
6. See Tasks

#### Frontend:

1. Make Landing Page
2. Make Login/Register Component
3. Make OnBoarding
4. Make DashBoard
   1. Add Task
      1. Assign Task
      2. Set Deadline to task
      3. Add n number of Comments to task
      4. Set Priority to task
