import React from "react";
import FormInputNote from "../components/note-FormInput";
import { useNavigate } from "react-router-dom";
import { addNote } from '../utils/api';

function AddNotePage(){
    const navigate = useNavigate()

    function onAddNoteHandler(note){
        addNote(note);
        navigate("/");
    }

    return(
        <section className="add-new-page">
            <FormInputNote addNote={onAddNoteHandler}/>
        </section>
    )
}

export default AddNotePage;