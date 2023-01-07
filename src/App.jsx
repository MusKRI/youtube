import { Route, Routes } from "react-router-dom";

import {
  Feed,
  Header,
  SearchResultContext,
  VideDetailContext,
} from "./components";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route
          path="/searchResult/:searchQuery"
          element={<SearchResultContext />}
        />
        <Route path="/video/:id" element={<VideDetailContext />} />
      </Routes>
    </div>
  );
}

export default App;
