import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
    createNote,
    getNotes
} from "../api/api";


function CustomerNotes(){

    const { id } = useParams();


    const [note,setNote] = useState("");

    const [notes,setNotes] = useState([]);



    useEffect(()=>{

        loadNotes();

    },[]);



    async function loadNotes(){

        const data = await getNotes(id);

        setNotes(data);

    }



    async function handleAddNote(){

        if(!note.trim()){
            return;
        }


        const data = {

            customer_id:Number(id),

            note:note

        };


        await createNote(data);


        setNote("");


        // reload notes after adding

        loadNotes();


        alert("Note added successfully");

    }



    return (

        <div className="container mt-4">


            <h3>
                Customer Notes
            </h3>



            {/* Add Note */}

            <textarea

                className="form-control"

                rows="4"

                placeholder="Write customer note..."

                value={note}

                onChange={
                    e=>setNote(e.target.value)
                }

            />



            <button

                className="btn btn-primary mt-3"

                onClick={handleAddNote}

            >

                Add Note

            </button>



            <hr/>




            {/* Show Notes */}

            <h4>
                Previous Notes
            </h4>



            {
                notes.length === 0 ?

                (

                    <p>
                        No notes available
                    </p>

                )

                :

                (

                    notes.map(item=>(

                        <div
                        className="card p-3 mt-3"
                        key={item.id}
                        >


                            <p>
                                {item.note}
                            </p>


                            <small>
                                {new Date(
                                    item.created_at
                                ).toLocaleString()}
                            </small>


                        </div>

                    ))

                )

            }



        </div>

    )

}


export default CustomerNotes;