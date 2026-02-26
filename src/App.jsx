import { Route, Routes } from "react-router-dom";

import Home from "@containers/Home/Home";

// ContentLoader is no longer needed here –
// the Express server fetches content before rendering and pre-populates
// the Redux store (window.__PRELOADED_STATE__) on every request.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
