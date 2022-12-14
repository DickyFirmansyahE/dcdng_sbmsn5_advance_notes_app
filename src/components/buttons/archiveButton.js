import React from "react";
import PropTypes from 'prop-types';
import { FiFolderPlus } from 'react-icons/fi';

function ArchiveButton({id, onArchived})
{
    
    return(
    <button className="action" type="button" title="archive" onClick={()=>{onArchived(id)}}><FiFolderPlus /></button>
    )
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchived: PropTypes.func.isRequired,
}

export default ArchiveButton;