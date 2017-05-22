# knockout-store-todo
Example Knockout To Do app utilizing [knockout-store](https://github.com/Spreetail/knockout-store)
state management.

This is an example application showing how knockout-store can be used
to manage app state.
It also uses [wepack](https://webpack.js.org/) to bundle files, including html templates.
This allows for writing modular components that can update app state and react to changes
without being coupled to other components.

> Note: The view models in this project are defined with factory functions
rather than constructors or classes which may look unfamiliar to Knockout developers.
The other methods of defining view models also work just as well.  

## Installation and Running Locally
1. Clone the repository, navigate to it, and run `npm install`.
2. Run `npm run build`.
3. Load up the `index.html` file in your browser.

You can also run `npm run dev` to watch the files and rebuild when changes are detected.
