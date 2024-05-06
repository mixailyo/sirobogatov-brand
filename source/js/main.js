import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {headerInit} from './modules/header';
import {initTabs} from './modules/tabs/init-tabs';
import {CustomSelect} from './modules/select/custom-select';
import {Form} from './modules/form-validate/form';
import { bannerInit } from './modules/banner'
import { advantagesInit } from './modules/advantages'
import { mainCatalogInit } from './modules/main-catalog'
import { whereInit } from './modules/where'
import { videoInit } from './modules/video'
import { upInit } from './modules/up'
import { lineInit } from './modules/line'
import { detailInit } from './modules/detail'
import { recipeInit } from './modules/recipe'

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  headerInit();
  bannerInit();
  advantagesInit();
  recipeInit();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initTabs();
    mainCatalogInit();
    whereInit();
    videoInit();
    upInit();
    lineInit();
    detailInit();

    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
