import Test from "./Test";
import "./app.scss";

import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
