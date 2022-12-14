import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";


function LoginPage({loginSuccess}){
    async function onLogin({email,password}){
        const {error,data} = await login({email,password})
        if(!error)
        {
            loginSuccess(data)
        }
    } 
    return(
        <LocaleConsumer>
         {
      ({ locale }) => {
        return (
        <section className="login-page">
            <h2>{locale === 'id' ? 'Silahkan masukkan email dan password untuk login' : 'Please enter your email and password to login'}</h2>
            <LoginInput login={onLogin}/>
            <p>{locale === 'id' ? 'Belum punya akun?' : "Don't have an account yet?"} <Link to="/register">{locale === 'id' ? 'Daftar Di sini' : "Register Here"}</Link></p>
        </section>
        )
    }}
    </LocaleConsumer>
    );
}

LoginPage.propTypes ={
    loginSuccess:PropTypes.func.isRequired
}

export default LoginPage;