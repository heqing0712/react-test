/**
 * map 对象实体
 */
export interface MapRef {
  /**
   * 放大
   */
  changeScalePlus: Fn;
  /**
   * 缩小
   */
  changeScaleMinus: Fn;

  /**
   * 重置
   */
  changeScaleReset: Fn;

  /**
   * 缩放到最小值
   */
  changeScaleMin: Fn;
}
