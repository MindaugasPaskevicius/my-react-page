import React, { useState, useRef, useEffect } from "react";
import './Todo.css';

const Todo = () => {

  const [newList, setNewList] = useState("");
  const [items, setItems] = useState([]);
  const itemInput = useRef(null);
  const [itemErrorMsg, setItemErrorMsg] = useState("")

  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem("items"));
    if (storageList) {
      setItems(storageList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);


  const deleteItem = (index) => {
    items.splice(index, 1)
    setItems([...items]);
  };

  const handleInput = (e) => {
    setNewList({ name: e.target.value });
  };


   const handleClick = (e) => {
    e.preventDefault();
    itemInput.current.value = "";

    if (newList === "") {
      setItemErrorMsg("Can't leave the title blank");

    }
    else {
      let updateItem = JSON.stringify([...items, newList]);
      localStorage.setItem("items", updateItem);
      setNewList("")
      setItems([...items, newList]);
      setItemErrorMsg("")
    };
  };


  return (
    <div className="container">
      <div className="text-center pt-5"><h1>Todo list</h1></div>
       <div className="d-flex justify-content-center mt-5">
         <div id="todo-card">
           <div className="card-body">
            <h2 className="card-title text-center pt-5">Items list</h2>
            <form className="col-12 d-flex m-3 justify-content-center pe-3 pt-4">
              <div className="col-5 ">
                <input
                  className="form-control"
                  ref={itemInput}
                  onChange={handleInput}
                />              {itemErrorMsg && <p className="text-danger">{itemErrorMsg}</p>}

              </div>

              <div>
                <button id="button-add" className="btn ms-3" onClick={handleClick}>
                  <span>Add</span>
                </button>
              </div>
            </form>
            <div className="d-flex justify-content-center ">
            <ul className="list-group">
              {items.length > 0 ? (
                items.map((items, index) => (
                  <li key={index} className="list-group-item mt-2">
                    {items.name}
                    <button className="btn btn-success float-end" 
                    onClick={() => { deleteItem(index); }}>Delete</button>
                  </li>
                ))
              ) : (
                <div className="text-center text-danger pt-5">No items found!</div>
              )}
            </ul>
            </div>
          </div>
        
      </div>
      </div>
    </div>

  );
};

export default Todo;