import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Ping } from "./pages/ping/Ping";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Ping />
      </ThemeProvider>
    </div>
  );
}

export default App;
