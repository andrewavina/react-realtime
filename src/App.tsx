import { useState } from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";

interface Stock {
  symbol: string;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [route, setRoute] = useState<string>("home");
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [symbol, setSymbol] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  function handleOnSubmit() {
    console.log("SUBMIT");
    setSymbol("");
    setName("");
    setPrice(0);
    setStocks((prevStocks) => [
      ...prevStocks,
      {
        symbol,
        name,
        price,
      },
    ]);
  }

  return (
    <div className={styles.appContainer}>
      <NavBar setRoute={setRoute} />
      {/* Other components and content */}
      <main className={styles.mainContent}>
        <h1>Current Route: {route}</h1>
        <hr />

        <h2>Add Stock</h2>
        <form action={handleOnSubmit}>
          <label>
            Symbol:
            <input
              type="text"
              required
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>
          <button type="submit">Add Stock</button>
        </form>

        <h2>Stocks</h2>
        <ul>
          {stocks.map((stock) => (
            <li key={stock.symbol}>
              {stock.symbol} - {stock.name} - ${stock.price}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
