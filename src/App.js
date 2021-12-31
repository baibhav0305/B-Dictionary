import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Definition from "./components/Definition";
import Footer from "./components/Footer";

function App() {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      // let response;
      await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("some random error");
          }
          return res.json();
        })
        .then((response) => {
          // const data = response.json();
          console.log(response);
          setResult(response);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Navbar />
      <Input getQuery={(e) => setQuery(e)} />
      {result && <Definition result={result} />}
      <Footer />
    </div>
  );
}

export default App;

// https://api.dictionaryapi.dev/api/v2/entries/en/<word>
