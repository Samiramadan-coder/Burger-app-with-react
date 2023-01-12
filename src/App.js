import React from "react";
import Layout from "./components/Layout/Layout";
import BuilderBurger from "./containers/BurgerBuilder/BurgerBuilder";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <BuilderBurger />
      </Layout>
    );
  }
}

export default App;
