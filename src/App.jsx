import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";

function App() {
  const sampleBook = {
    asin: "0316438960",
    title: "The Last Wish: Introducing the Witcher",
    img: "https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg",
    price: 9.59,
    category: "fantasy",
  };
  return (
    <div className="App">
      <MyNav></MyNav>
      <Welcome className="mt-3 display-6"></Welcome>
      {/* <AllTheBooks></AllTheBooks> */}
      <SingleBook book={sampleBook} />
      <BookList books={fantasy}></BookList>
      <BookList books={history}></BookList>
      <BookList books={horror}></BookList>
      <BookList books={romance}></BookList>
      <BookList books={scifi}></BookList>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
