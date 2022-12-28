import ReactDOM from "react-dom/client";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import Reservation from "./Reservation";
import Clock from "./Clock";
import TemperatureCalculator from "./Temperature";
import FilterableProductTable from "./FilterableProductTable";
import HookExample from "./HookExample";

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

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
    <br />
    <FilterableProductTable products={PRODUCTS} />
    <br />
    <HookExample />
  </>
);
