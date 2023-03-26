import AsyncStorage from "@react-native-async-storage/async-storage";
import { WalletConnectProvider } from "@walletconnect/react-native-dapp/dist/providers";
import Routes from "./Routes";

export default function App() {
  return (
    <WalletConnectProvider
      redirectUrl={Platform.OS === "web" ? window.location.origin : `noBs://`}
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}
    >
      <Routes />
    </WalletConnectProvider>
  );
}
