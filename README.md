# Let's Eat! A social eating experience
Let's Eat! is a full-stack web application that allows users to login, create profiles for their favorite eating/drinking spots, link to their menus, comment & interact with other users, and rate items that they've ordered from those places.

**Link to project:** https://letseat.cyclic.app

![landing page for Let's Eat!](https://github.com/kiefer-dev/Lets-Eat/blob/main/public/img/letseatlogin.gif?raw=true)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Express, Node.js, EJS, Mongoose/MongoDB for database management, Passport for user authentication, Tailwindcss for UI

This is my largest full-stack application yet. It utilizes the MVC architectural paradigm along with routing files to handle requests in an organized way. I've previously built a front-end website for my close friends that listed our favorite restaurants, their hours, linked to their menus, etc.; however, I knew for my first big full-stack app I wanted users to be able to actually create accounts and add their own restaurants/menus dynamically.
I began by creating a database schema and figuring out the types of data I would need and how to connect them to each other (restaurants linked to menu items linked to comments, etc). Once I had the Model files fleshed out and knew what pieces of data I wanted each database object to have, I began coming up with the routes I knew I'd need in the routing files. The controller & view files took a bit more trial and error - since this was my first time working on a full-stack application this big, I had to do a lot of tweaking to figure out exactly how data was being passed from controller to view & back again (params, async/await). 

## Optimizations

As my largest full-stack application yet, clearly there are some things that can/will be worked on. I still want to improve the structure of the code - having recently learned about the SOLID principles of design, I know there is plenty of room for improvement in my program logic. The UI is fairly lackluster (I'm not a front-end designer) and once I have more experience with it I'd like to implement React components to make everything simpler and smoother, as opposed to the messy EJS that is currently used. 
The project isn't yet complete - I want to overhaul the comments sections for restaurants/menu items by making them look cleaner, letting users reply to other comments, add images, add hours of operation, search by name/tag, add multiple tags, etc. All in due time!

## Lessons Learned:

Diving in so deep with full-stack development really helped me get a good grip on MVC and its importance. Going into this project I felt like I didn't really understand how each piece fit together or how exactly the data flowed from piece to piece. However, after a lot of headaches following the data around (especially from Controller to View and back again), I definitely feel much more comfortable designing a stable program architecture.
I did, however, learn that EJS is a pain that I'd rather not deal with anymore moving forward - so I will be dedicating more time to learning how to properly implement React ;-)
