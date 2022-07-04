# Angular API Essentials

## Angular Service

- A Angular Service defines Functionalities that many Component in the Application will use
- Angular Services allow to save the Functionalities on one Location instead of different Components
- They centralized Functionality and share it across different Components
- Angular Services can be injected into Components and be there used

## Reactive Programming vs. Procedural Programming

- Traditional Imperative Programming is als known as Procedural Programming
- Imperative Programming proceeds in the Logic of Executing Commands, Line by Line
- JavaScript can not execute Commands, Line by Line, hence Frontend Frameworks based on JavaScript and TypeScript work asynchronously
- Reactive Programming is Programming with asynchronous Data Streams that can be **created**, **changed** or **combined** on the go

## Angular Components

<p align="center">
  <img src="https://user-images.githubusercontent.com/29623199/177098581-00bf2e56-8a50-4443-babb-ad616c89b221.png" alt="Angular Components" />
</p>

![angular-components]()

### Angular Module

- Angular Apps are modular through the used Angular Modular System (Angular Modules - NgModules)
- A Module is a cohesive Block of Code dedicated to an Application Domain, or a Workflow that is a tightly coupled Set of Capabilities
- Every Angular App has at least one Module - the Root Module (App Module)
- A complex Angular App can have many Feature Modules
- A Angular Model use the @NgModule Decorator

### Angular Template

- Angular Templates are dynamic
- When Angular renders the Angular Templates it transforms the DOM according to the Instructions given by Directives

### Metadata

- Metadata contains the Information how Angular has to process a Class

### Service

- Services contain any Value, Function or Feature that the Angular Application needs
- A Service is a Class with a well defined Purpose that has a specific Task
- Components consume the Services

### Components

- The Decorator @Component marks a Class as Angular Component and provides in Metadata that decides how the Component is use at Runtime
- Angular Components consist of:
  - an HTML Template that declares what renders on the Page,
  - a TypeScript Class that defines the Behavior,
  - the CSS Selector that defines how the Component is used in the the Template, and optionally CSS Styles applied to the Component
- A Component must belong the an @NgModule (Angular Module) in Order for it to be available to another Component
- The Benefits of Components are:
  - Reuse Code
  - Component-based Architecture
  - Breaking down Complexity

## Angular Lifecycle Hooks

- Lifecycle Hooks are used to provide special Functionality in Angular that allow to hook in a Component Lifecycle
- **ngOnInit()** is hooked into the Lifecycle when a Component gets initialized
- **ngOnDestroy()** is hooked into the Lifecycle when a Component gets destroyed
- A List of all Lifecycle hooks in exact Order hoe they get initialized

<p align="center">
  <img src="https://user-images.githubusercontent.com/29623199/177103511-73a8c3c9-bafd-43fe-a712-5fe7b7334c00.png" alt="Angular Lifecycle Hooks" width="200" />
</p>
