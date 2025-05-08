# Project Goals
This is just something to tinker with and stay familiar with react & next.js.
I also want to try using some things I'm less familiar with, like svelte, tailwind CSS, and backend development.
It will be a cosplay planning web app.

# Project Plan
1. Make a standalone frontend in Next.js with server state as a storage mechanism. It should have the following features.
    1. Users can create, update, and delete a cosplay instance. They can also read one from local storage.
    2. Cosplay instances should have the following attributes:
        1. Name
        2. Description
        3. Parts (many to one)
        4. Reference image (in the local storage model, this will have to be a URL)
    3. In addition, there will be cosplay "parts."
        1. These will point to the cosplay with a list.
        2. They will have the following attributes:
            1. Name
            2. Description
            3. Reference image
            4. Materials (many to one)
            5. Build steps (a simple user defined list)
            6. Time estimate
            7. Is done (boolean)
    4. There's room for other models to add too, like events to plan for and timelines, but these are the basics.

2. Once the standalone frontend is developed to satisfaction, make a django backend and a user auth system, so people can save their cosplays.

3. Revisit the Next.js frontend to use the django backend.

4. Refactor as needed.

5. As a stretch goal, try rebuilding the frontend in svelte!