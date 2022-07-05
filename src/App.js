import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.js";
import HomePage from "./pages/HomePage.js";
import HistoryPage from "./pages/HistoryPage.js";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function handleCreateUser(user) {
    setUsers([user, ...users]);
  }

  return (
    <>
      <header>
        <h1>Game</h1>
      </header>
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage users={users} onCreateNewGame={handleCreateUser} />
            }
          />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Main>
      <Navigation />
    </>
  );
}

const Main = styled.main`
  display: grid;
  gap: 10px;
`;
export default App;
