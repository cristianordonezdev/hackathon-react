import { useState } from "react"
export default function Experience({setForm}) {
  const [selected, setSelected] = useState({})

  const select = [{id: '<1', text: '<1 year'}, {id: '1-3', text: '1-3 years'}, {id: '>3', text: '>3 years'}]

  const handleClickForm = (item) => {
    setSelected(item)
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(selected)
  }
 

  return (
    <form onSubmit={handleSubmit}>
      <h1>How much experience do you have with the topics selected</h1>

      <div className="control-ratio">
        {select.map((item) => (
          <div className="container-ratio">
            <input type="radio" id={item.id} name="experience" value={item.id} onClick={() => handleClickForm(item)}/>
            <label for={item.id}>{item.text}</label>
          </div>
        ))}
        <div className="container-buttons-actions">
            <button className="button-previus" id="" type="button" onClick={() => setForm('topic')}>Previus</button>
            <button className="button-pink" type="submit">Continue</button>
        </div>
      </div>
    </form>
  );
}