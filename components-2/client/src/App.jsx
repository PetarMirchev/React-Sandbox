import Footer from "./components/Footer";
import Header from "./components/Header";
import UserList from "./components/UserList";

function App() {
  return (
  <div>
    <Header/>
      <main className="main">
          <UserList />
      </main>
    <Footer/>
  </div>
  );
}

export default App;
