import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./reducers/boardReducer";
import boardAction from "./actions/boardAction";
import { Provider } from "react-redux";

const store = configureStore({ reducer: boardReducer });

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
