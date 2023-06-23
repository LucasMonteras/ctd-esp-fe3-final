
import{Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Layout from './Layout/Layout';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path={routes.home} element={<Home/>}/>
        </Routes>
      </div>
  );
}

export default App;
