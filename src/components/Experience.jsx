import { useState, useEffect } from "react";

export default function Experience({setForm, setUser, user}) {
  const [selected, setSelected] = useState({})
  const [error, setError] = useState(false)

  const select = [{id: '<1', text: '<1 year'}, {id: '1-3', text: '1-3 years'}, {id: '>3', text: '>3 years'}]

  useEffect(() => {
    if (user.experience) {
      handleClickForm(user.experience);
    } 
  }, [])

  const handleClickForm = (item) => {
    setSelected(item)
    setError(false)
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (selected.id === undefined) {
      setError(true)
      return
    }
    setUser((prev) => ({...prev, experience: selected}))
  }
 

  return (
    <form onSubmit={handleSubmit}>
      <h1>How much experience do you have with the topics selected</h1>

      <div className="control-ratio">
        {select.map((item) => (
          <div className="container-ratio" key={item.id}>
            <input 
              type="radio" 
              id={item.id}
              checked={selected.id === item.id}
              name="experience" value={item.id} onChange={() => handleClickForm(item)}/>
            <label htmlFor={item.id}>{item.text}</label>
          </div>
        ))}
        {error && <span className="control-error">Please select experience</span>}

        <div className="container-buttons-actions">
            <button className="button-previus" id="" type="button" onClick={() => setForm('topic')}>Previus</button>
            <button className="button-pink" type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}