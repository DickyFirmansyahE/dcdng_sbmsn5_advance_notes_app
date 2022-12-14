import React from "react";
import NoteItem from "./note-Item";
import PropTypes from 'prop-types';

function NoteList({Notes})
{
    return(
        <section className="notes-list">
            {
                 Notes.map((note)=>
                     <NoteItem
                         key={note.id}
                         {...note}/>
                 )
            }
            
        </section>
    )
}

NoteList.propTypes ={
    Notes: PropTypes.arrayOf(PropTypes.object).isRequired
} 

export default NoteList;