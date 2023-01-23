import React, {useEffect, useState} from 'react';
import {RiCloseCircleLine} from "react-icons/ri"
import {AiFillCheckCircle} from "react-icons/ai"
import "./feed.css"

function Feed() {
    const [items, setItems] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [numberCompleted, setCompleted] = useState(0);
    
    useEffect(() => {
        try {
            if(localStorage.getItem("localStorage")) {
                const storedItems = JSON.parse(localStorage.getItem("localStorage"));
                setItems(storedItems);
            }
        } catch (error) {
            console.log(error);
        }
        
        try {
            if(localStorage.getItem("localStorageCompleted")) {
                const completedItems = JSON.parse(localStorage.getItem("localStorageCompleted"));
                setCompleted(completedItems);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);
    

    const inputEvent = (event) => {
        setUserInput(event.target.value);
    }

    const addItem = () => {
        if(!userInput) {
            alert("Enter a task!");
        } else {
            setItems([...items, userInput]);
            localStorage.setItem("localStorage", JSON.stringify([...items, userInput]));
            setUserInput("");
        }
    };

    const deleteItem = (index) => {
        setItems(items.filter((item, i) => i !== index));
        localStorage.setItem("localStorage", JSON.stringify(items));
    };

    const clearItems = () => {
        const answer = window.confirm("Are you sure you want to clear all tasks?")
        if(answer) {
            setItems([]);
            localStorage.removeItem("localStorage")
        }
    }

    const completedTask = (index) => {
        let updated = numberCompleted + 1;
        setCompleted(updated);
        setItems(items.filter((item, i) => i !== index));
        localStorage.setItem("localStorage", JSON.stringify(items));
        localStorage.setItem("localStorageCompleted", (numberCompleted+1));
    }

  return (
    <div className='container'>
        <h1 className='titleText'>TODO LIST</h1>
        <input type="text" className='userInput' onChange={inputEvent} value={userInput} maxLength="50" placeholder='Enter Task'></input>
        <button className='addButton' onClick={addItem}>Add</button>
        <h2 className='completedText'>Completed tasks: {numberCompleted}</h2>
        <div className="contentList">
            {items.map((item, index) => (
                    <div className='itemContainer'>
                        <li className='taskText' key={index}>
                            {item}
                        </li>
                        <RiCloseCircleLine className='deleteButton' onClick={() => deleteItem(index)}/>
                        <AiFillCheckCircle className='checkButton' onClick={() => completedTask(index)}/>
                    </div>
                ))}
        </div>
        {!items.length ? null: (
            <div>
                <button className='clearButton' onClick={clearItems}>Clear</button>
            </div>
        )}
    </div>
  )
}

export default Feed