import './App.css';
import avatar from './avatar.png';
import { Btn } from './components/Btn';
import { Header } from './components/Header';
import Hello from './components/Hello';
import { Logo } from './components/Logo';
import { Main } from './components/Main';
import { Man } from './components/Man';
import ModeToggler from './components/ModeToggler';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
  <div className='App'>
    <Man/>
    <Hello message="I'm back"/>
    <Header name="Maurice" color="purple" />
    <div className='content'>
    <Main greetings="Hello"/>
    <Sidebar greetings="Hi" />
    </div>
    <Logo image={avatar}/>
    <Btn message="Good" />
    <ModeToggler/>
  </div>
   );
}

export default App;
