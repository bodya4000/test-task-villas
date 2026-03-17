import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const windowWidth = width;
export const windowHeight = height;

export const CARD_GAP = 12;
export const SCREEN_PADDING = 16;
export const BACK_BUTTON_SIZE = 44;
export const HERO_IMAGE_ASPECT = 0.7;
export const VILLA_CARD_IMAGE_ASPECT = 0.75;

export const villaCardWidth =
  (windowWidth - SCREEN_PADDING * 2 - CARD_GAP) / 2;

export const SKELETON_ROWS = 4;

export const VILLA_PREVIEW_CARD_WIDTH = windowWidth * 0.72;
export const VILLA_PREVIEW_CARD_HEIGHT = 180;
