import { useAddress } from "@thirdweb-dev/react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../slices";
import { useConnectUserWalletMutation } from "../../services/userWalletServices/userWalletServices";
import * as SecureStore from "expo-secure-store";

const AuthWrapper = ({ children }) => {
  const address = useAddress();
  const dispatch = useDispatch();

  const [connectWallet] = useConnectUserWalletMutation();

  useEffect(() => {
    if (address) {
      connectWallet({ accountAddress: address })
        .then(async ({ data: { token } }) => {
          dispatch(setToken(token));
          await SecureStore.setItemAsync("authToken", token);
        })
        .catch((e) => console.log(e));
      dispatch(setUser({ walletAddress: address }));
    }
  }, [address]);

  return <>{children}</>;
};

export default AuthWrapper;
