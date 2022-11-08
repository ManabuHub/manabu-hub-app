import * as React from "react";
import { useEffect } from "react";
import { useAuth } from "../../providers/AuthProvider/hooks";
import { Main } from "../Main";
import { Start } from "../Start";

export const All: React.FC = () => {
  const { userId } = useAuth();
  useEffect(() => {
    console.log(userId);
  }, [userId]);
  return userId != null ? <Main /> : <Start />;
};
