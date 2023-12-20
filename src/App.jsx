import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";

import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";

function App() {
  const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];

  return (
    <div className="App">
      <MyNav></MyNav>
      <Welcome className="mt-3 display-6"></Welcome>
      {/* <AllTheBooks></AllTheBooks> */}

      <BookList books={allBooks}></BookList>

      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
