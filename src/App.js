import Header from "./components/Header";
import Signup from "./components/Signup";
import Register from "./components/Register.jsx";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header />
      <main>
        <Signup></Signup>
        <Register></Register>
        <Login></Login>
      </main>
    </>
  );
}

export default App;
