import React from "react";
import { showFormattedDate } from "../utils/formated-Date";
import PropTypes from 'prop-types';


function NoteItemBody({createdAt,body}){
    return(
        <>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </>
    ) 
}


NoteItemBody.proptTypes = {
    createdAt : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired
}

export default NoteItemBody;