const { handleNotFound, handleServerError } = require('./error');
const { autocomplete , getDataApi} = require('./searchData');

module.exports={ handleNotFound, handleServerError, getDataApi ,autocomplete }


