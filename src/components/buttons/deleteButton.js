import React from "react";
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';


function DeleteButton({id,onDelete})
{
    
    return(
            <button className="action" type="button" title="delete" onClick={()=>{onDelete(id)}}><FiTrash2 /></button>
    )
}
DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;