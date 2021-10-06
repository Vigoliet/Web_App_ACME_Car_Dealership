exports.index = (req, res) => {

    const data = require('../public/data/cars.json');
    //res.sendFile('public/data/index.html');
    res.json(data);
 
};