import { useState } from "react"
export default function Topics({setForm}) {
  const [selected, setSelected] = useState([])

  const select = [{id: 'sd', text: 'Software Development'}, {id: 'us', text: 'User experience'}, {id: 'gp', text: 'Graphic Design'}]

  const handleClickForm = (item) => {
    console.log(item)
    const buttonElement = document.getElementById(item.id)

    if (buttonElement) {
        buttonElement.classList.toggle('active')
        if (buttonElement.classList.contains('active')) {
            setSelected([...selected, item])
        } else {
            setSelected(selected.filter((select) => select.id !== item.id))
        }
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    setForm('experience')
    console.log(selected)
  }
 

  return (
    <form onSubmit={handleSubmit}>
      <h1>Wich topics are you interested in?</h1>

      <div className="control-row">
        {select.map((item) => (
            <button className="button-select" type="button" id={item.id} onClick={() => handleClickForm(item)} key={item.id}>{item.text}</button>
        ))}
        <div className="container-buttons-actions">
            <button className="button-previus" id="" type="button" onClick={() => setForm('register')}>Previus</button>
            <button className="button-pink" type="submit">Continue</button>
        </div>
      </div>
    </form>
  );
}