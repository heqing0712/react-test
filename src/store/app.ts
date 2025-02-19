import { proxy, useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";
import Decimal from "decimal.js";
import { MapRef } from "@/types/MapRef";
import { AppStore } from "@/types/AppStore";


export const appStore = proxy<AppStore>({
  balance: '',

  searchValue: '',

  /**
   * 设置活跃工具栏
   * @param val
   */
  setSearchValue(val: string) {
    appStore.searchValue = val;
  },

  /**
   * 设置钱包余额
   * @param val 
   */
  setBalance(val: string) {
    appStore.balance = val
  }
});


export const useAppStore = (): AppStore => {
  return useSnapshot(appStore);
};
