import { useCallback, useState } from "react";
export const useWriteBody = () => {


  // useCallbackは、パフォーマンス改善のために使用しています（これを使わないと、画面が再レンダリングされたとき=自分か子のStateが変更されたときに、関数も毎回定義され直されます）

  return {
  };
};
