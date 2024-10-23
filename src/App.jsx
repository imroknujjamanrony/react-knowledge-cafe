import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex justify-between w-11/12 mx-auto">
        <Blogs className="md:w-2/3"></Blogs>
        <Bookmarks className="md:w-1/3"></Bookmarks>
      </div>
    </>
  );
}

export default App;
