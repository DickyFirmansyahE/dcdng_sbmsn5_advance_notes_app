import React from "react";
import PropTypes from 'prop-types';
import { LocaleConsumer } from "../contexts/LocaleContext";

function SearchNotes({keyword,keywordChange})
{
    return(
        <LocaleConsumer>
         {
      ({ locale }) => {
        return (
        <section className="search-bar">
            <input type="text" 
                placeholder={locale === 'id' ? 'Cari judul catatan ...' : 'Search note title ...'}
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)}/>
        </section>
        )
    }}
    </LocaleConsumer>
    );
}

SearchNotes.propTypes ={
    keyword : PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchNotes;