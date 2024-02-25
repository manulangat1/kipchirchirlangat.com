import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as NewRoutes,
} from "react-router-dom";
import Posts from "./components/posts";
import Dashboard from "./Dashboard";
import Navbar from "./components/Navbar/Navbar";
import PostDetail from "./components/posts/PostDetail";
const Routes = () => {
  return (
    <Router>
      <Navbar />
      <NewRoutes>
        <Route path="/blog" element={<Posts />}></Route>
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/" element={<Dashboard />} />
      </NewRoutes>
    </Router>
  );
};

export default Routes;
