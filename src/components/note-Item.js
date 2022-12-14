import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import NoteItemBody from "./note-ItemBody";


function NoteItem({id,title,createdAt,body}){
    return(
        <article className="note-item">
            <h3 className="note-item__title"><Link to={`/notes/${id}`}>{title}</Link></h3>
            <NoteItemBody createdAt={createdAt} body={body}/>
        </article>
    )   
}

NoteItem.propTypes={
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body : PropTypes.string.isRequired,
}

export default NoteItem;