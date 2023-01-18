import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import data from "./data";
import "./App.css";

function App() {
  const entries = data.map((item) => {
    return <Entry key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <section className="journal-entries">{entries}</section>
      {/* <Entry /> */}
    </div>
  );
}

export default App;
