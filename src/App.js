import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Header2 from './components/Header/Header2';

function App() {
  return (
    <BrowserRouter>
      {/* <Header2 /> */}
      <Header />
    </BrowserRouter>    
  );
}

export default App;
