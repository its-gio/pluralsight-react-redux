import React from "react";
import "./App.scss";
import routes from "./routes";
import { Container } from "@material-ui/core";
import Header from "./Components/common/Header";

function App() {
  return (
    <Container disableGutters>
      <Header />
      {routes}
    </Container>
  );
}

export default App;
