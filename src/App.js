import "./scss/main.scss";

import Landing from "./components/landing";
import Written from "./components/written";
import Sworn from "./components/sworn";
import Oral from "./components/oral";
import About from "./components/about";
import Examples from "./components/examples";
import Form from "./components/form";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Written />
      <Sworn />
      <Oral />
      <About />
      <Examples />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
