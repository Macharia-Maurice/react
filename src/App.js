import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Sidebar } from './components/Sidebar';
import avatar from './avatar.png';
import { Logo } from './components/Logo';

function App() {
  return (
  <div className='App'>
    <Header name="Maurice" color="purple" />
    <div className='content'>
    <Main greetings="Hello"/>
    <Sidebar greetings="Hi" />
    </div>
    <Logo image={avatar}/>

  </div>
   );
}

export default App;
