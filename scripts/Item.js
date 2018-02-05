'use strict';

const Item = (function () {

  const create = function (name, description, rating, site) {
    return {
      id: cuid(),
      name,
      description,
      rating,
      site,
      condensed: false,
      editing: false
    //   newTitle: false,/* from event listener */
    //   editing: false /* triggered by event listener on toggle switch */
    };
  };

  return {
    create,
  };

}());

