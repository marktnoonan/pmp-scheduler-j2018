# Service Scheduler

## Overview

This project is intended to allow People Making Progress to manage Employee schedules with greater accuracy and less time spent. It begins by processing what we know in advance about the needs of the Indiviuals we serve on a given day, and what employees are typically responsible for various roles on that day, to suggest a "default" schedule, which can then be edited as needed. 

Schedules are managed internally in the system by tracking the times at which changes in service or location take place over the 24-hour period. The day's schedule is then constructed based on applying these changes to a baseline taken from midnight the day before.

## Expectations of Users

It should handle vacation time, off days, and absences of Individuals by identifying what needs have not been met and flagging them for the user.

The Scheduler is designed to catch errors or omissions on the part of the User, so that if the schedule says "Jimmy is at Mike's house at 6 pm", but does not show how Jimmy gets there, it will flag this before schedules are sent out.

When schedules are complete for a given period, the User can have them formatted correctly for emailing to individual employees, and collected into a single schedule for Managers. It also allows for sorting the schedules in the period by Day, Location, or Employee.

## Specifc Tasks Users Can Do

### CRUD for Underlying Data

    - Add/Remove/Edit Individuals 
        - Name
        - UUID
        - Default Schedules based on the type of day
        - Appointments, Absences, Notes, etc.

    - Add/Remove/Edit Employees 
        - Name
        - UUID
        - Default Schedules based on the type of day
        - Email Addresses
        - Permissions/Training/Rules - who they can work with, tasks they are allowed to do, who they are allowed to drive (if they are allowed to drive), whether they have/use their own car, etc.

    - Add/Remove/Edit Managers
        - Name
        - UUID
        - Default Schedules based on the type of day
        - Email Addresses
        - What Locations they manage?

    - Add/Remove/Edit Vehicles
        - Vehicle Name
        - Number of Seats

    - Add/Remove/Edit Locations
        - Location Name

### Interacting with Schedules

    - Generate a schedule for any given day.
    - Add new changes in location, service, activity, etc, of any person or vehicle at any time chosen by User.
    - Provide a warning if something appears to be impossible (e.g. Individual seems to be driving their own van?).
    - Allow such warnings to be dismissed as "will fix later", dismissed with a note "will be brought in by helicopter', or dismissed with no explanation.
    - Keep a list of warnings available but not in the way.
    - Easily move groups of people around in the schedule.

### Interacting with Employees and Managers
    
    - Allow schedule to be emailed to employee for a specified date range.
    - All editing of email in browser before it is sent.
    - Allow for updated schedules to be sent out to affected employees if changes are made.

