import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import { NavBar, Input } from "./components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 1rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 5rem;
`;

function App() {
  return (
    <AppContainer className="App">
      <NavBar />
      <InnerContainer>
        <Routes>
          <Route
            path="/shapal"
            element={
              <Input
                showLabel
                label="Email"
                id="email-input"
                background="var(--grey)"
                width="300px"
                height="60px"
                type="text"
                placeholder="Email"
              />
            }
          />
        </Routes>
      </InnerContainer>
    </AppContainer>
  );
}

export default App;
