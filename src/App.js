import { CssBaseline } from "@mui/material";
import styled from "styled-components";
import Template from "./components/Template/Template";

const AppStyled = styled.div`
  body{
    overflow: hidden;
  }
`;

function App() {
  return (
    <AppStyled>
      <CssBaseline/>
      <Template/>
    </AppStyled>
  );
}

export default App;
