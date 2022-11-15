import * as React from "react";
import { useEffect } from "react";
import { useAuth } from "../../providers/AuthProvider/hooks";
import { MainTab } from "../MainTab";
import { StartStack } from "../StartStack";

export const All: React.FC = () => {
  const { userId } = useAuth();
  useEffect(() => {
    console.log(userId);
  }, [userId]);
  return userId != null ? <MainTab /> : <StartStack />;
};
