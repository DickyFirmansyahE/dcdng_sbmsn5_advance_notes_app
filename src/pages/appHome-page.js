import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/note-List";
import SearchNotes from "../components/search-note";
import { getActiveNotes } from '../utils/api';
import { FiPlus } from 'react-icons/fi';
import { LocaleConsumer } from "../contexts/LocaleContext";

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNote] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || ''
  });

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
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
        <section className="homepage">
            <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
            <SearchNotes keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {notes.length
              ? <NoteList Notes={filteredContacts}/>
              : <div>{locale === 'id' ? 'Tidak ada catatan' : 'There is no notes'}</div>
            }
            <div className="homepage__action">
                <button className="action" type="button" title={locale === 'id' ? 'Tambah' : 'Add'}><Link to="/add" className="LinkButton"><FiPlus /></Link></button>
            </div>
        </section>
        )
        }}
        </LocaleConsumer>
    );
  }

export default HomePageWrapper;