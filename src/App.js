import './App.css';
import Home from './Home'
import About from './About';
import Contact from './Contact';
import Service from './service';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
      <Contact/>
    </div>
  );
}
/**
 * To update deployed version run following commands
 * git push origin :gh-pages
 * npm run build
 * npm run deploy
 */

export default App;
