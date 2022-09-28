import { Outlet, Route, Routes } from 'react-router-dom';
import { AuthenticationPage } from './pages/AuthenticationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route
          path="conversations"
          element={
            <div>
              <div>Conversations</div>
              <Outlet />
            </div>
          }
        >
          <Route path=":id" element={<div>Conversation ID Page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
