import { useState, useEffect } from "react";
import "./Notes.css"
const Notes = () => {
    const [note, setNote] = useState("");
    const [noteList, setNoteList] = useState(() => {
        const localValue = localStorage.getItem('NOTELIST')
        if (localValue == null) return []

        return JSON.parse(localValue)
    });
    useEffect(() => {
        localStorage.setItem("NOTELIST", JSON.stringify(noteList))
    }, [noteList])

    function addNote(e){
        e.preventDefault();
        if (note === "") return;
        const item = { id: crypto.randomUUID(), value: note }
        setNoteList([...noteList, item]);
        setNote("");
    }  
    function showNotes(list){
        list.classList.toggle('hide');
    } 
    return (
        <>
         <form>
            <input
                value={note}
                onChange={e => setNote(e.target.value)}
            />
            <button type='submit' onClick={addNote}>Add</button>
        </form>
        <button onClick={e=>showNotes(e.currentTarget.nextSibling)}>View Notes</button>
        <ul className="hide note-list">
            {noteList.map(({id, value}) => 
                <li key={id} className="note-list-item">
                    <p className="note-content">{value}</p>
                    <button className="delete-note">X</button>
                </li>
            )}
        </ul>
        </>
    );
}
export default Notes;