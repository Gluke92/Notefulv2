/* global getItems */

'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/georgesolo';
  function getItems(callback) {
    // callback('api module works!');
    $.getJSON(`${BASE_URL}/items`, callback);
    /* Call in TAs to look at line 9, and end of step 3 */
  }
  function createItem(name, callback) {
    const newItem = { name: name };
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(newItem),
      success: function (response) {
        callback(response); /* we can roll 19 and 20 into just callback */
      }
    });
  }

  function updateItem(id, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  }

  function deleteItem(id, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      success: callback
    });
  }
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
})(); 
