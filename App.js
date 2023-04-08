import { ThirdwebProvider } from "@thirdweb-dev/react-native";
import Routes from "./Routes";

export default function App() {
  return (
    <ThirdwebProvider activeChain={"mainnet"}>
      <Routes />
    </ThirdwebProvider>
  );
}
