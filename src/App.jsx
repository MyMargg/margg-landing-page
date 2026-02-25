import { Route, Routes } from "react-router-dom";

import Home from "@containers/Home/Home";
import { ContentLoader } from "@content/ContentLoader";

function App() {
  return (
    <ContentLoader>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ContentLoader>
  );
}

export default App;
