import { iconsSvg } from './icons.js';

const MENU_OPEN_ICONS = document.getElementsByClassName('menu-icon-open');
const MENU_CLOSE_ICONS = document.getElementsByClassName('menu-icon-close');
const DARK_MODE_ICONS = document.getElementsByClassName('dark-mode-icon');
const USER_ICONS = document.getElementsByClassName('user-auth-icon');
const LIGHT_MODE_ICONS = document.getElementsByClassName('light-mode-icons');
const SEARCH_ICONs = document.getElementsByClassName('searchButton');


function assignIcons(icons, svg) {
  const iconsElements = icons;
  for (let i = 0; i < icons.length; i += 1) {
    iconsElements[i].innerHTML = svg;
  }
}

assignIcons(MENU_OPEN_ICONS, iconsSvg.menuOpen);
assignIcons(MENU_CLOSE_ICONS, iconsSvg.menuClose);
assignIcons(USER_ICONS, iconsSvg.user);
assignIcons(DARK_MODE_ICONS, iconsSvg.darkMode);
assignIcons(LIGHT_MODE_ICONS, iconsSvg.lightMode);
assignIcons(SEARCH_ICONs, iconsSvg.searchIcon);



document.addEventListener('click', () => {
  assignIcons(MENU_OPEN_ICONS, iconsSvg.menuOpen);
  assignIcons(MENU_CLOSE_ICONS, iconsSvg.menuClose);
  assignIcons(DARK_MODE_ICONS, iconsSvg.darkMode);
  assignIcons(LIGHT_MODE_ICONS, iconsSvg.lightMode);
  assignIcons(LIGHT_MODE_ICONS, iconsSvg.searchIcon);
});
