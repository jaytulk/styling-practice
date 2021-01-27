import { PrimaryNavigation } from "./PrimaryNavigation";
import { GettingStarted } from "./GettingStarted";
import { Footer } from "./Footer";
import "./App.css";

/*
  Replicate the styles from:
  https://reactjs.org/docs/getting-started.html
*/

const App = () => {
  return (
    <div>
      <PrimaryNavigation />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default App;
