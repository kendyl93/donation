import theme from "./styles/theme";
import { Layout } from "./Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { DonationCard } from "./Modules/DonationCard";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          <DonationCard />
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
