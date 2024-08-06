import {
  MENU_BUTTON_ELEMENT,
  BOOK_NAV_BUTTON_ELEMENT,
  toggleNav,
  toggleBookList,
} from './app-navigation.js';

MENU_BUTTON_ELEMENT.addEventListener('click', toggleNav);
BOOK_NAV_BUTTON_ELEMENT.addEventListener('click', toggleBookList);
