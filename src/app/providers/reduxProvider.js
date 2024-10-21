"use client";

import { Provider } from "react-redux";
import store from "../store"; // Adjust the import path to where your store is located

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
