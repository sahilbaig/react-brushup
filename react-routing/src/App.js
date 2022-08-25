
import './App.css';
import {Link,Routes,Route} from 'react-router-dom'
import About from './pages/about';
import Contact from './pages/contact';
import BookRoutes from './bookRoutes';
import NotFound from './notFound';

function App() {
  return (
    <>
    <Routes>
      <Route path='/book' element={<h1>Extra content</h1>}> </Route>
    </Routes>
    <h1>Routing things
    </h1>
    <nav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/book">Books</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/book/*" element={<BookRoutes/>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
    
  );
}

export default App;