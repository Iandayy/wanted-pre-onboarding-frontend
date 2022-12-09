import { Suspense } from "react";

import Header from "./containers/Header";
import Layout from "./containers/Layout";
import Router from "./containers/Router";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Layout>
        <Router />
      </Layout>
    </Suspense>
  );
};

export default App;
