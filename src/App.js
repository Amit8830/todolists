import React, { useState } from 'react'
import TODoList from './ToDoList';


const App = () => {
  const [inputList, setInputList] = useState('');
  const [Items, setItems] = useState([]);


  const itemEvent = (event) => {
    setInputList(event.target.value)

  };


  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };
  const deleteItem = (id) => {
    console.log("delete");
    setItems((oldItems => {
      return oldItems.filter((arrElem, index) => {
        return index !==id;
      })
    }))
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1> To-Do List</h1>
        <br />
        <input type="text" placeholder="Add a Items"
          value={inputList}
          onChange={itemEvent} />
        <button onClick={listOfItem} >+</button>
        <ol>
          {/* <li>{inputList}</li> */}
          {Items.map((itemval, index) => {
            return <TODoList key={index} id={index} text={itemval}
              onSelect={deleteItem}
            />;
          })}

        </ol>

      </div>

    </div >
  );
};


export default App;