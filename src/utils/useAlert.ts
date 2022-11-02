import { useCallback } from "react";
import { Alert } from "react-native";

export enum AlertButtonStyle {
  OK = "default",
  CANCEL = "cancel",
  DESTRUCTIVE = "destructive",
}

export interface IAlertButton {
  text: string;
  onPress: () => void;
  style: AlertButtonStyle;
}

export interface IAlert {
  title: string;
  message: string;
  buttons: IAlertButton[];
}

export const useAlert = () => {
  const emitAlert = useCallback((alert: IAlert) => {
    Alert.alert(alert.title, alert.message, alert.buttons);
  }, []);

  return { emitAlert };
};
