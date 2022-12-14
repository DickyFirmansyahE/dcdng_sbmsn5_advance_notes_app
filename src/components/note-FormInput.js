import React from "react";
import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';

class FormInputNote extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            title:'',
            body:'',
        }
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeHandler(event)
    {
        this.setState(()=>{
            return{
                title:event.target.value,
            }
        })
    }

    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body:event.target.innerHTML,    
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state)
    }

    render(){
        return(
            <form className="add-new-page__input" onSubmit={this.onSubmitEventHandler}>
                <input className="add-new-page__input__title" 
                    placeholder="Nama catatan ..."
                    type="text"
                    value={this.state.title}
                    onChange = {this.onTitleChangeHandler}/>
                <div className="add-new-page__input__body"
                    data-placeholder="Apa yang ingin dicatat ..."
                    contentEditable="true"
                    value={this.state.body}
                    onInput={this.onBodyChangeEventHandler} />
                <div className="add-new-page__action">
                    <button type="submit" className="action" title="Simpan"><FiCheck /></button>
                </div>
            </form>
        )
    }
}

FormInputNote.propTypes ={
    addNote : PropTypes.func.isRequired
}

export default FormInputNote;