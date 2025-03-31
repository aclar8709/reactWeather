import { useState } from "react";
import "./indecision.css"

const Indecision = () => {
    const [newChoice, setNewChoice] = useState("");
    const [choices, setChoices] = useState([]);
    const [editFlag, setEditFlag] = useState(false);
    function addChoice(e) {
        e.preventDefault();
        if (newChoice === "") return;
      
        const item = { id: crypto.randomUUID(), value: newChoice }
        setChoices(c => [...c, item]);
        setNewChoice("");
    }
    function deleteChoice(idx) {
        const update = choices.filter(({ id, value }) => id !== idx);
        setChoices(update);
    }
    function editChoice(idx){
       const update =  choices.map(({id, value}) => {
            if(id === idx)
            {
                setEditFlag(true);
                setNewChoice(value);
            }
       })
    }
    function clearChoices() {
        setChoices([]);
    }
    function magic(){
        //console.log(choices.length)
        const choosen = Math.floor(Math.random() * choices.length);
        const choosenId = choices[choosen].id;
        const update =  choices.map(({id, value}) => {
            if(id === choosenId)
            {
                
            }
       })
        //choices[choice].classList.toggle("choosen-one");
    }
    return (
        <>
            <form className="input-form">
                <input
                    value={newChoice}
                    className="input-choice"
                    placeholder="Input your choice..."
                    onChange={e => setNewChoice(e.target.value)} />
                <button className="add-choice" onClick={e => addChoice(e)}>Add Choice</button>
            </form>
            <ul className="choice-list">
                {choices.map(({ id, value }) =>
                    <li className="list-item-choice" key={id}>
                        <p className="value">{value}</p>
                            <button className="edit-btn" onClick={()=>editChoice(id)}>Edit</button>
                            <button className="delete-btn" onClick={() => deleteChoice(id)}>X</button>
                    </li>
                )}

            </ul>
            {choices.length > 0 && <button className="magic" onClick={magic}>Make Choice</button>}
        </>
    );
}

export default Indecision;