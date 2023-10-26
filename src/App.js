import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { component, ...rest } = route
            return <Route key={index} {...rest} element={component} />
          })}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
