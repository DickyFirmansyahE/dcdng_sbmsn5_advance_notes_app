import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AppNav from './components/note-AppNav';
import LoginNav from './components/note-LoginNav';
import AddNotePage from './pages/addNote-page';
import ArchivedPageWrapper from './pages/archivedNote-Page';
import DetailWrapper from './pages/detailNote-page';
import HomePageWrapper from './pages/appHome-page';
import ErrorNotFound from './pages/notFound-page';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { getUserLogged, putAccessToken } from "./utils/api";
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authedUser: null,
      intializinig: true,
      theme: localStorage.getItem('theme') || 'dark',
      toggleTheme: () => {
        this.setState((prevState) => {
            const changeTheme = prevState.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme',changeTheme)
            return{
              theme: changeTheme
            }
        });
      },
      localeContext: {
        locale: localStorage.getItem('locale') || 'id',
        toggleLocale: () => {
          this.setState((prevState) => {
            const newLocale = prevState.localeContext.locale === 'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return {
              localeContext: {
                ...prevState.localeContext,
                locale: newLocale
              }
            }
          });
        }
      }
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        intializinig: false
      }
    })
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      }
    })
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    })
    putAccessToken('');
  }

  componentDidUpdate( prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }


  render() {
    
    if (this.state.intializinig) {
      return null
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
        <LocaleProvider value={this.state.localeContext}>
        <div className="app-container">
          <header className='contact-app__header'>
            <h1><Link to="/">{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link></h1>
            <LoginNav />
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path='*' element={<ErrorNotFound />} />
            </Routes>
          </main>
        </div>
        </LocaleProvider>
        </ThemeProvider>
      )
    }

    return (
      <ThemeProvider value={this.state}>
      <LocaleProvider value={this.state.localeContext}>
      <div className="app-container">
        <header className='contact-app__header'>
          <h1><Link to="/">{this.state.localeContext.locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link></h1>
          <AppNav logout={this.onLogout} name={this.state.authedUser.name}/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePageWrapper />} />
            <Route path='/add' element={<AddNotePage />} />
            <Route path='/notes/:id' element={<DetailWrapper />} />
            <Route path='/archives' element={<ArchivedPageWrapper />} />
            <Route path='*' element={<ErrorNotFound />} />
          </Routes>
        </main>
      </div>
      </LocaleProvider>
      </ThemeProvider>
    );
  }
}
export default App;
