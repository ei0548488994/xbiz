
'use strict';
const category = require('../models/Search');
 
exports.search = function(req, res) {
  const resultArray = [];
  const { value } = req.query;
  if (value) {
    for (let i = 0; i < category.length; i += 1) {
      const c = category[i].name;
      if (c.toLowerCase().startsWith(value.toLowerCase())) {
        resultArray.push(c);
      }
    }
  }
  res.json(resultArray);
};
