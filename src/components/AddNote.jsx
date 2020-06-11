import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';


function AddNote(props) {

    // Inputs State
    let [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        let { name, value } = event.target;
        setNote(prevValue => {
            return (
                {
                    ...prevValue,
                    [name]: value
                }
            )
        })
    }

    function handleSubmit(event) {
        props.onAdd(note);
        setNote({ title: "", content: "" });
        setExpanded(false);
        event.preventDefault();
    }

    // Expanded State
    let [expanded, setExpanded] = useState(false);

    function handleClick() {
        setExpanded(prevValue => {
            return !prevValue;
        })
    }

    // Main Component
    return (
        <div>
            <form className='add-note'>

                {expanded ? <input
                    name='title'
                    placeholder='Title'
                    onChange={handleChange}
                    value={note.title}
                    autoFocus
                    autoComplete='off' /> : null}

                <textarea
                    name='content'
                    placeholder={expanded ? 'write note here...' : 'click here to start...'}
                    onChange={handleChange}
                    value={note.content}
                    onClick={handleClick}
                    rows={expanded ? '3' : '1'}
                />

                <Zoom in={expanded}>
                    <Fab onClick={handleSubmit}>
                        <AddIcon />
                    </Fab>
                </Zoom>

            </form>
        </div>
    )
}

export default AddNote;