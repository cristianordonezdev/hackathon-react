import { useEffect } from "react"
import { useState } from "react"
export default function Topics({setForm, setUser, user}) {

  const [selected, setSelected] = useState([])
  const [error, setError] = useState(false)
  const select = [{id: 'sd', text: 'Software Development'}, {id: 'us', text: 'User experience'}, {id: 'gp', text: 'Graphic Design'}]


  useEffect(() => {
    if (user.topics) {
      setSelected(user.topics)
      user.topics.forEach((topic) => {
        const buttonElement = document.getElementById(topic.id);
        if (buttonElement) buttonElement.classList.add('active');
      });
    } 
  }, [])


  const handleClickForm = (item) => {
    const buttonElement = document.getElementById(item.id)
    
    if (buttonElement) {
        buttonElement.classList.toggle('active')
        if (buttonElement.classList.contains('active')) {
            setSelected([...selected, item])
            setError(false)
        } else {
          const newSelected = selected.filter((select) => select.id !== item.id);
          setSelected(newSelected);
          if (newSelected.length === 0) {
            setError(true);
          }
        }
    }
  }
  function handleSubmit(event) {
    event.preventDefault();

    if (selected.length === 0) {
      setError(true)
      return
    }
    
    setUser((prev) => ({...prev, topics: selected}))
    setForm('experience')
  }
 

  return (
    <form onSubmit={handleSubmit}>
      <h1>Wich topics are you interested in?</h1>

      <div className="control-row">
        {select.map((item) => (
            <button className="button-select" type="button" id={item.id} onClick={() => handleClickForm(item)} key={item.id}>{item.text}</button>
        ))}
        {error && <span className="control-error">Please select at least one topic</span>}
       
        <div className="container-buttons-actions">
            <button className="button-previus" id="" type="button" onClick={() => setForm('register')}>Previus</button>
            <button className="button-pink" type="submit">Continue</button>
        </div>
      </div>
    </form>
  );
}