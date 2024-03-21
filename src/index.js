import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Notification from "./Notification.js";
import Container from "./Container.js";
import Todo from "./Todo.js";
import ListToDo from "./ListToDo.js";
import Action from "./Action.js";
// Import StyleSheet
import "./css/all.css"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <Container>
        <Notification/>
          <Todo>
            <Action/>
            <ListToDo/>
         </Todo>
      </Container>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
