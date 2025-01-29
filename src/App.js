import { useState } from "react";
import Modal from "./components/Modal";
import Register from "./components/Register";
import Topics from "./components/Topics";
import Experience from "./components/Experience";

function App() {
  const [form, setForm] = useState('topic')
  return (
    <>
      <main>
        <Modal>
          {form === 'register' && <Register setForm={setForm}></Register>}
          {form === 'topic' && <Topics setForm={setForm}></Topics>}
          {form === 'experience' && <Experience setForm={setForm}></Experience>}

        </Modal>
      </main>
    </>
  );
}

export default App;
