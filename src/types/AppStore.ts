import { BuilderToolsEnum } from "@/configs/enums/BuilderToolsEnum";

/**
 * App Store
 */
export interface AppStore {
  /**
   * 钱包余额
   */
  balance: string;
  /**
   * 搜索的值
   */
  searchValue: string,
  /**
   * 设置搜索的值
   */
  setSearchValue: Fn

  /**
   * 设置钱包余额
   */
  setBalance: Fn;
}
