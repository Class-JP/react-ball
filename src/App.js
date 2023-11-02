import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ApplicationNavBar } from './components/navbar';
import { ApplicationHome } from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NewGame } from './components/games/new';
import { EditGame } from './components/games/edit';
import { ShowGame } from './components/games/show';
import { Games } from './components/games';

function App() {
  return (
    <BrowserRouter>
      <div className="reactball-app">
        <ApplicationNavBar />
        <Routes>
          <Route path='/' element={<ApplicationHome />} />
          <Route path='/games' Component={() => <Games/>}/>
          <Route path='/games/new' Component={() => <NewGame />} />
          <Route path='/games/:id/edit' Component={() => <EditGame />} />
          <Route path='/games/:id' Component={() => <ShowGame/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
