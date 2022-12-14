import useInput from "../utils/useInput";
import PropTypes from 'prop-types';
import { LocaleConsumer } from "../contexts/LocaleContext";

function LoginInput({login}) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        login({email, password});
    }

    return (
        <LocaleConsumer>
         {
      ({ locale }) => {
        return (
        <form className="input-login" onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange} placeholder={locale === 'id' ? 'email anda' : "your email"}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange} placeholder={locale === 'id' ? 'password anda' : "your password"}/>
            <button>{locale === 'id' ? 'Masuk' : "Login"}</button>
        </form>
        )
    }}
    </LocaleConsumer>
    );
}

LoginInput.propTypes ={
    login: PropTypes.func.isRequired,
}

export default LoginInput;