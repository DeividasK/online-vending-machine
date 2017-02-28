# online-vending-machine
Simple online vending machine UI created with React. Includes reasoning behind technology choices.

## Technologies

**React**. Simple and robust framework for V in the MVC.
Requirement for the task.  One of the most popular ones (if not THE most popular) in the JavaScript community. Created and supported by Facebook.

**Webpack**. Module bundler.

Makes it easy to transform and bundle files into production ready package. Best in terms of simplicity and efficiency compared to Gulp or Grunt.

**Redux**. Predictable state container for JavaScript apps.

I have chosen this particular library because of it's relatively low overhead when starting (compared to GraphQL) and relatively long project life-cycle (compared to React component state or Flux). It is easy to reason about the state of the app.

Why not React component state or Flux for such a simple app? From my experience, the overhead to setting up Redux is much smaller compared to the time required to refactor the app when it grows larger. For all but the largest web applications Redux state container will be more than enough to handle the state of the app.

**Bootstrap**. Styles framework.

I have chosen to use this particular framework because of my proficiency in it (compared to Foundation or Material).

**Reactstrap** A simple and straightforward library of Bootstrap class wrappers.

I have chosen to use this library for easier component readability.

## Functionality

**Implemented**

- Select item
- Remove item
- Payment mocking
- Clean basket on payment confirmation

I have chosen these features because they are some of the core functions of any vending machine.

**Omitted**

- Display 'Basket is empty' message when there are no items in the basket
- Add a custom amount of the same item
- Remove a custom amount of the same item from the basket
- Remove all items from a basket

## Design / Architecture considerations
_Which browsers should be supported?_

**Assumption**: Latest browsers.

_How should the applciation manage it's state?_

React component state / Flux / Redux / GraphQL. Decided on Redux for the reasons above.

_How much time should be spent on the design?_

I decided to make bare bones design, because one of the primary objectives was to prototype a simple UI that allows the user to interact with the machine.