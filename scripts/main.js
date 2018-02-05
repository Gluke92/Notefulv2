/* global $ bookmarkList api */

'use strict';

function newFunction() {
  return console.log;
}

newFunction()('Im here');



$(document).ready(function () {
  bookmarkList.bindEventListeners();
  bookmarkList.render();

  // api.createItem('pears', (newItem) => {
  //   api.getItems((items) => {
  //     console.log(items);
  //   });
  // });

  api.getItems((items) => {
    items.forEach((item) => bookmark.addItem(item));
    bookmarkList.render();
  });
});