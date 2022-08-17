const path = require ('path');

const handleNotFound=(req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'Error', '404.html'));
}
const handleServerError=(error, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', 'Error', '500.html'));
}
module.exports={ handleNotFound, handleServerError };