import React from "react";
import PropTypes from 'prop-types';
import { FiFolderMinus } from 'react-icons/fi';

function UnArchiveButton({id, unArchived})
{
    return(
    <button className="action" type="button" title="unarchive" onClick={()=>{unArchived(id)}}><FiFolderMinus /></button>
    )
}

UnArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    unArchived: PropTypes.func.isRequired,
}

export default UnArchiveButton;