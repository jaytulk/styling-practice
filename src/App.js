import { PrimaryNavigation } from "./PrimaryNavigation";
import { GettingStarted } from "./GettingStarted";
import { Footer } from "./Footer";
import "./App.css";

/*
  Replicate the styles from:
  https://reactjs.org/docs/getting-started.html

  A great approach is to use flexbox to position your elements.
  CSS Tricks has the go-to guide on using it:
  https://css-tricks.com/snippets/css/a-guide-to-flexbox/
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
