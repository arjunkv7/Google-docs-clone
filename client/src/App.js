import Editor from "./components/Editor";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route

} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import PageNotFound from "./components/PageNotFound";
import { v4 as uuid } from "uuid";

function App() {
  return (
    <Router>
      <Routes>
      
        {/* <Route path="/" element={<Navigate to={`/documents/${uuid()}`}/>}/> */}
        <Route path="/documents" element={<Navigate to={`/documents/${uuid()}`}/>}/>

        <Route exact path="/" element={<Dashboard />} />
        <Route path="/documents/:id" element={ <Editor/>}/>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

    </Router>
  );
}

export default App;
