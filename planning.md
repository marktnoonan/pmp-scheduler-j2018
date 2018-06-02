# Service Scheduler

## Overview

This project is intended to allow People Making Progress to manage Employee schedules with greater accuracy and less time spent. It begins by processing what we know in advance about the needs of the Indiviuals we serve on a given day, and what employees are typically responsible for various roles on that day, to suggest a "default" schedule, which can then be edited as needed. 

Schedules are managed internally in the system by tracking the times at which changes in service or location take place over the 24-hour period. The day's schedule is then constructed based on applying these changes to a baseline taken from midnight the day before.

## Expectations of Users

It should handle vacation time, off days, and absences of Individuals by identifying what needs have not been met and flagging them for the user.

The Scheduler is designed to catch errors or omissions on the part of the User, so that if the schedule says "Jimmy is at Mike's house at 6 pm", but does not show how Jimmy gets there, it will flag this before schedules are sent out.

When schedules are complete for a given period, the User can have them formatted correctly for emailing to individual employees, and collected into a single schedule for Managers. It also allows for sorting the schedules in the period by Day, Location, or Employee.

## Specifc Tasks Users Can Do

    ### CRUD for underlying data
        - Add/Remove/Edit Individuals 
            - Name
            - UUID
            - Default Schedules based on the type of day
            - Appointments, Absences, Notes, etc.

        - Add/Remove/Edit Employees 
            - Name
            - UUID
            - Default Schedules based on the type of day
            - Email

        - Add/Remove/Edit Managers
        - Add/Remove/Edit Vehicles
        - Add/Remove/Edit Locations
        

## General User Tasks

## General User Tasks