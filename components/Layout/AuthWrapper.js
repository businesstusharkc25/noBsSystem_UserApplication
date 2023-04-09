import { useAddress } from "@thirdweb-dev/react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices";

const AuthWrapper = ({ children }) => {
  const address = useAddress();
  const dispatch = useDispatch();

  useEffect(() => {
    if (address) {
      dispatch(setUser({ walletAddress: address }));
    }
  }, [address]);

  return <>{children}</>;
};

export default AuthWrapper;
