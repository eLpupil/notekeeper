import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import AddNote from './AddNote';


function App() {

    let [items, setItems] = useState([]);

    function addItem(note) {
        setItems(prevList => {
            return (
                [...prevList, note]
            )
        })
    }

    function deleteItem(id) {
        setItems(prevList => {
            return(
                prevList.filter((item, index) => {
                    return id !== index
                })
            )
        })
    }

    // Components
    return (
        <div>
            <Header />
            <AddNote onAdd={addItem} />
            {items.map((item, index) => {
                return <Note
                    title={item.title}
                    content={item.content}
                    key={index}
                    id={index}
                    clickDelete={deleteItem} />
            })}
            <Footer />
        </div>
    );
}

export default App;