import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { archivedNote, deleteNote,getNote, unarchivedNote } from "../utils/api";
import NoteDetail from "../components/note-Detail";
import ErrorNotFound from "./notFound-page";

function DetailWrapper(){

    const {id} = useParams();
    const navigate=useNavigate();

    async function onDeleteHandler(id) {
        if (confirm('Delete this note?')) {
            await deleteNote(id);
            alert('Note deleted');
            navigate("/")
          } else {
            alert('Note are not deleted');
          }
    }

    async function onArchiveHandler(id)
    {
        if (confirm('Archive this note?')) {
            await archivedNote(id);
            alert('Note archived');
            navigate("/")
          } else {
            alert('Note are not archived');
          }
    }
    
    async function onUnArchiveHandler(id)
    {
        if (confirm('Unarchive this note?')) {
            await unarchivedNote(id);
            navigate("/")
            alert('Note Unarchived');
          } else {
            alert('Note are not Unarchive');
          }
    }

    const [notes, setNote] = React.useState([]);
    React.useEffect(() => {
        getNote(id).then(({ data }) => {
          setNote(data);
        });
      }, [id]);
    
  
  return(
    <section className="detail-page">
        { notes
            ? <NoteDetail {...notes} id={id} onDelete={onDeleteHandler} onArchived={onArchiveHandler} unArchived={onUnArchiveHandler}/>
            : <ErrorNotFound/>
        }
       
    </section>
);
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchived: PropTypes.func.isRequired,
    unArchived: PropTypes.func.isRequired,
}

export default DetailWrapper;