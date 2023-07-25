import Editor from "./components/Editor";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route

} from 'react-router-dom'
import { v4 as uuid } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page" element={<Navigate to={`/documents/${uuid()}`}/>}/>
        <Route path="/documents/:id" element={ <Editor/>}/>
      </Routes>

    </Router>
  );
}

export default App;
