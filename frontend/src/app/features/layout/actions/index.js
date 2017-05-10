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

export function openTokenDialog() {
  return {
    type: constants.OPEN_TOKEN_DIALOG,
  };
}

export function closeTokenDialog() {
  return {
    type: constants.CLOSE_TOKEN_DIALOG,
  };
}
