import ReactDOM from "react-dom/client";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import Reservation from "./Reservation";
import Clock from "./Clock";
import TemperatureCalculator from "./Temperature";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <NameForm />
    <br />
    <EssayForm />
    <br />
    <FlavorForm />
    <br />
    <Reservation />
    <br />
    <Clock />
    <br />
    <TemperatureCalculator />
  </>
);
