import GlobalProvider from "./context/GlobalContext";
import InputCustom from "./components/InputCustom";

const App = () => {


  return (
    <>
      <GlobalProvider>
        <InputCustom />
      </GlobalProvider>
    </>
  );
}

export default App;