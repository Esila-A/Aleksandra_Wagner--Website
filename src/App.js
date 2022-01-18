import "./scss/main.scss"

import Menu from "./components/menu";
import Landing from "./components/landing";
import Written from "./components/written";
import Sworn from "./components/sworn"
import Oral from "./components/oral"
import About from "./components/about";
import Examples from "./components/examples";
import Form from "./components/form";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Menu />
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
