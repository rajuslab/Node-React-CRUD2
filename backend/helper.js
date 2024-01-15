

  function getOffset1(currentP = 1, listPerP) {
    return(currentP - 1) * [listPerP];
  }
  function emptyOrRows1(rows) {
    if(!rows) {
      return [];
    }
    return rows;
  }
  module.exports = {
    getOffset1,
    emptyOrRows1
  }