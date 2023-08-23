import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Profile from './routes/Profile';
import NotMatch from './routes/NotMatch';
import Layout from './Components/Layout';
import SinglePage from './routes/SinglePage';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":slug" element={<SinglePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default App;