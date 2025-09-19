import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MasterList from './pages/MasterList';
import PolicyHierarchy from './pages/PolicyHierarchy';
import Boycotts from './pages/Boycotts';
import Charities from './pages/Charities';
import DiscussionForums from './pages/DiscussionForums';
import ProjectUpdatesErrata from './pages/ProjectUpdatesErrata';
import GetInvolvedSupport from './pages/Support';
// Import other pages as needed

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*/policy*/}
          <Route path="/source-issues" element={<MasterList />} />
          <Route path="/policy-hierarchy" element={<PolicyHierarchy />} />
          <Route path="/boycotts" element={<Boycotts />} />
          <Route path="/charities" element={<Charities />} />
          <Route path="/discussion-forums" element={<DiscussionForums />} />
          <Route path="/project-updates" element={<ProjectUpdatesErrata />} />
          <Route path="/get-involved" element={<GetInvolvedSupport />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
