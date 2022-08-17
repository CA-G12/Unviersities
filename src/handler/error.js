const path = require ('path');

const handleNotFound=(req, res) => {
    res.status(404).send(path.join(__dirname, '..', '..', 'public', 'Erorr', '404.html'));
}
const handleServerError=(error, req, res, next) => {
    res.status(404).send(path.join(__dirname, '..', '..', 'public', 'Erorr', '500.html'));
}
module.exports={ handleNotFound, handleServerError };