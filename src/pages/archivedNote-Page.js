import React from "react";
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/note-List";
import SearchNotes from "../components/search-note";
import { getArchivedNotes } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function ArchivedPageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNote] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
      return searchParams.get('keyword') || ''
    });

    React.useEffect(() => {
        getArchivedNotes().then(({ data }) => {
          setNote(data);
        });
      }, []);
    
    
      function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
      }
    
      const filteredContacts = notes.filter((data) => {
        return data.title.toLowerCase().includes(
          keyword.toLowerCase()
        );
      });
  
    return(
      <LocaleConsumer>
         {
      ({ locale }) => {
        return (
        <section className="archive-page">
            <h2>{locale === 'id' ? 'Arsip Catatan' : 'Notes Archive'}</h2>
             <SearchNotes keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {notes.length
              ? <NoteList Notes={filteredContacts}/>
              : <div>{locale === 'id' ? 'Tidak ada catatan' : 'There is no notes'}</div>
            }
        </section>
         )
        }}
        </LocaleConsumer>
    );
  }

export default ArchivedPageWrapper;