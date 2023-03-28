import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import OurHistory from './pages/OurHistory';
import AboutUs from './pages/AboutUs';
import BlogDetail from './pages/BlogDetail';

function App () {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="blog/*" element={<Blog />}>
          <Route path="blog_detail" element={<BlogDetail />} />
        </Route>
        <Route path="contacts" element={<Contacts />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="history" element={<OurHistory />} />
      </Route>
    </Routes>
  );
}

export default App;
