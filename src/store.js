
//  1. Install Dependencies npm install react react-dom redux react-redux
//  we need three programs called "React", "React-DOM", and "Redux". Think of these like tools in a toolbox that we use to build our app.

// 2.  Create the Redux Store
// A store is like a big container that holds all the important information for our app.
// 3. We use a special function called "reducer" to change the store when we want to add or take away toys
// 4. Create the React App
// Now that we have a store, we can start building our app. In this step, we create the app by writing some code in a file called "App.js"
// 5. Render the App
//In the last step, we put everything together and show our app on the screen. We do this by writing some code in a file called "index.js". We use a special tool called "ReactDOM" to help us show the app on the screen
import { createStore } from "redux";

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
