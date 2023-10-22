import theme from "./styles/theme";
import { Layout } from "./Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          test
        </Layout>
      </>
    </ThemeProvider>
  );
}

export default App;
