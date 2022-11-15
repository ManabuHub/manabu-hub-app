import * as React from "react";
import { useAuth } from "../../providers/AuthProvider/hooks";
import { MainTab } from "../MainTab";
import { StartStack } from "../StartStack";

export const All: React.FC = () => {
  const { userId } = useAuth();
  return userId != null ? <MainTab /> : <StartStack />;
};
