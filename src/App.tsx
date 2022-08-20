import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import { NavBar, ContactForm, WorkPage } from "./components";

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
            path="/shapal-art"
            element={
              <div>
                <h1>Shapal Art</h1>
                <p>
                  This is a simple app that allows you to create and share your
                  own art.
                </p>
              </div>
            }
          />
          <Route path="/shapal-art/contact" element={<ContactForm />} />
          <Route path="/shapal-art/work" element={<WorkPage />} />
        </Routes>
      </InnerContainer>
    </AppContainer>
  );
}

export default App;
