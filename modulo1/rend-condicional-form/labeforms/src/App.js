import React from "react";
import styled from "styled-components"
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";

const Screen = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <Screen>
      <Page4/>
    </Screen>
  );
}

export default App;
