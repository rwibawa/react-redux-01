# react-redux-01
Learn redux store in react project.

# 1. Setup
```shell
$ npx create-react-app react-redux-01 --template typescript
$ cd react-redux-01
$ npm install -S redux react-redux @reduxjs/toolkit @types/react-redux

```

# 2. Creating Actions
Actions are payloads of information that send data from your application to your Redux store. They are typically defined as TypeScript types.

# 3. Defining Reducers
Reducers specify how the application's state changes in response to actions. They are pure functions that take the current state and an action, and return a new state.

# 4. Slice
A slice is a concept introduced by Redux Toolkit. It represents a portion of the Redux state and includes the reducer logic, action creators, and initial state all in one place. Slices help to organize and simplify the Redux code.

## Key Differences
* Structure: Reducers are standalone functions, while slices bundle the reducer, actions, and initial state together.
* Simplicity: Slices simplify the setup and reduce boilerplate code compared to traditional reducers.
* Toolkit Integration: Slices are part of Redux Toolkit, which provides additional utilities for efficient Redux development.
