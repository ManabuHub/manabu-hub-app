import * as React from "react";
import { useAuth } from "../../providers/AuthProvider/hooks";
import { MainOuterStack } from "../MainOuterStack";
import { StartStack } from "../StartStack";

export const All: React.FC = () => {
  const { userId } = useAuth();
  return userId != null ? <MainOuterStack /> : <StartStack />;
};
