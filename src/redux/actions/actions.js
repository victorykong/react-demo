/**
 * 生成 action 的函数
 */

import * as types from '../constants/actionTypes';

export const increMent = () => {
    return {
        type: types.INCREMENT
    }
}