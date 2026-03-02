import { Route, Routes } from "react-router-dom";

import Home from "@containers/Home/Home";
import CoursePage from "@containers/Home/CoursePage";

// ContentLoader is no longer needed here –
// the Express server fetches content before rendering and pre-populates
// the Redux store (window.__PRELOADED_STATE__) on every request.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<CoursePage />} />
    </Routes>
  );
}

export default App;
