import { ThirdwebProvider, useAddress } from "@thirdweb-dev/react-native";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "./store";
import { AuthWrapper } from "./components";

export default function App() {
  return (
    <ThirdwebProvider activeChain={"mainnet"}>
      <Provider store={store}>
        <AuthWrapper>
          <Routes />
        </AuthWrapper>
      </Provider>
    </ThirdwebProvider>
  );
}
