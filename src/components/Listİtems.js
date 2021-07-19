import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteItem, UpdateItem } from '../redux/action';
import Newcolumn from './newcolumn';



const Listİtems = ({ todo }) => {
    const [editable, seteditable] = useState(false);
    const [name, setName] = useState(todo.name);

    let dispatch = useDispatch()
    return (
        <div>
            <div className="row lists m-4 d-flex justify-content-center">
                <div className="col-4">{editable ? <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} /> : <h5>{todo.name} {todo.surname}  </h5>}</div>
                <div className="col-1"><select className="form-select bg-light px-2"><option>{todo.attended == "true" ? "i/e" : 'q/b'}</option><option>{todo.attended == "true" ? "q/b" : 'i/e'}</option></select></div>
                <div className="col-1"><select className="form-select px-2"><option>{todo.attended == "true" ? "i/e" : 'q/b'}</option><option>{todo.attended == "true" ? "q/b" : 'i/e'}</option></select></div>
                <div className="col-1"><select className="form-select px-2"><option>{todo.attended == "true" ? "i/e" : 'q/b'}</option><option>{todo.attended == "true" ? "q/b" : 'i/e'}</option></select></div>

                <button style={{ fontWeight: "bold" }} onClick={() => dispatch(DeleteItem(todo.id))} className="btn btn-danger col-1 mx-2"> Delete </button>
                <button style={{ fontWeight: "bold" }} onClick={() => {
                    console.log("Update")
                    dispatch(UpdateItem(
                        { ...todo, name: name }
                    ));
                    if (editable) { setName(todo.name) } seteditable(!editable)
                }} className="btn btn-success col-1 p-2 mx-2">{editable ? "Update" : "Edit"}</button>

            </div>
        </div>
    );
}
export default Listİtems;
