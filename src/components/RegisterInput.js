import { register } from "../utils/api";
import useInput from "../utils/useInput";
import { LocaleConsumer } from "../contexts/LocaleContext";

function RegisterInput()
{
    const [name,onNameChange] =useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [confirmPassword, handleConfirmPasswordChange] = useInput('');

    const onSubmitHandler = e => {
      if(password === confirmPassword){
        e.preventDefault();
        register({name,email,password});
        alert('register succeed');
      } else {
        alert("password doesn't match with confirm password");
      }
    }
    return(
      <LocaleConsumer>
         {
      ({ locale }) => {
        return (
        <form onSubmit={onSubmitHandler} className="input-register">
            <label>{locale === 'id' ? 'Nama' : "Name"}</label>
            <input required type="text" placeholder={locale === 'id' ? 'Nama' : "Name"} value={name} onChange={onNameChange} id="name"/>
            <label>Email</label>
            <input required type="email" placeholder="Email" value={email} onChange={onEmailChange} id="email"/>
            <label>Password</label>
            <input required type="password" placeholder="Password" autoComplete="current-password" id="password" value={password} onChange={onPasswordChange}/>
            <label>Confirm Password</label>
            <input required value={confirmPassword} placeholder="Confirm Password" type="password" onChange={handleConfirmPasswordChange} id="confirmPassword"/>
            <button>{locale === 'id' ? 'Daftar' : "Register"}</button>
        </form>
        )
      }}
      </LocaleConsumer>
    );
}


export default RegisterInput;