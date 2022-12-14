import React from "react";
import PropTypes from 'prop-types';
import { showFormattedDate } from "../utils/formated-Date";
import DeleteButton from "./buttons/deleteButton";
import ArchiveButton from "./buttons/archiveButton";
import UnArchiveButton from "./buttons/unarchiveButton";

function NoteDetail({id,title,createdAt,body,onDelete,onArchived,unArchived,archived})
{
    return(
        <section className="detail-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{body}</div>
            <div className="detail-page__action">
                {(archived===false)
                ? <ArchiveButton id={id} onArchived={onArchived}/>
                : <UnArchiveButton id={id} unArchived={unArchived}/>
                }
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </section>
    )
}

NoteDetail.propTypes ={
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchived: PropTypes.func.isRequired,
    unArchived: PropTypes.func.isRequired,
    archived: PropTypes.bool.isRequired,
}


export default NoteDetail;