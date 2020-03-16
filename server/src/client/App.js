import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  // confused on the destructing and use of dispatch below
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
