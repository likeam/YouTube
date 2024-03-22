import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Feed from "./Components/Feed";
import VideoDetails from "./Components/VideoDetails"
import SearchResult from "./Components/SearchResult"

import AppContext from "./Context/ContextApi";

export default function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/searchResult/:searchQueary" element={<SearchResult />} />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}
