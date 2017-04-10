import * as constants from './constants';

export function showDrawer() {
  return {
    type: constants.SHOW_DRAWER,
  };
}

export function hideDrawer() {
  return {
    type: constants.HIDE_DRAWER,
  };
}
