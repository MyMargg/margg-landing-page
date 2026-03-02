import { Route, Routes } from "react-router-dom";

import Home from "@containers/Home/Home";
import CoursePage from "@containers/Home/CoursePage";
import RoadmapsPage from "@containers/Home/RoadmapsPage";
import RoadmapDetailPage from "@containers/Home/RoadmapDetailPage";
import CourseDetailPage from "@containers/Home/CourseDetailPage";

// ContentLoader is no longer needed here –
// the Express server fetches content before rendering and pre-populates
// the Redux store (window.__PRELOADED_STATE__) on every request.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roadmaps" element={<RoadmapsPage />} />
      <Route path="/roadmap/:roadmapSlug" element={<RoadmapDetailPage />} />
      <Route path="/course/:courseSlug" element={<CourseDetailPage />} />
      <Route path="/:slug" element={<CoursePage />} />
    </Routes>
  );
}

export default App;
