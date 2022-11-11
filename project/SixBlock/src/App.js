//npm router install - npm install react-router-dom --save
import MainSixBlock from "./components/main/MainSixBlock";
import GlobalProvider from "./contexts/GlobalContext";
import MainProvider from "./contexts/MainContext";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {


  return (
    <>
      <GlobalProvider>
        <MainProvider>

          <GlobalStyle>

            {/* login */}


            {/* main */}
            <MainSixBlock />

          </GlobalStyle>

        </MainProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
