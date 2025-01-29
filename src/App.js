import { useState } from "react";
import Modal from "./components/Modal";
import Register from "./components/Register";
import Topics from "./components/Topics";
import Experience from "./components/Experience";

function App() {
  const [form, setForm] = useState('register');
  const [user, setUser] = useState({})

  console.log('que uipdated', user)

  return (
    <>
      <main>
        <Modal>
          {form === 'register' && <Register setForm={setForm} setUser={setUser} user={user}></Register>}
          {form === 'topic' && <Topics setForm={setForm} setUser={setUser} user={user}></Topics>}
          {form === 'experience' && <Experience setForm={setForm} setUser={setUser} user={user}></Experience>}
        </Modal>
      </main>
    </>
  );
}

export default App;
