exports.index = (req, res) => {
    
    const data = require('../public/data/cars.json');
    //res.sendfile('public/data/index.html');
    res.json(data);
   
};

exports.pelikan = (x, y) => {
    // y.send('<b>u asked for car number 12.</b>');
    y.sendfile('public/data/cars.html');
};

