const mongoose = require("mongoose");
const Business = require("../models/Business");
const Categories = require("../models/Categories");
const User = require("../models/User");
const MainCategory = require("../models/MainCategory");

db.MainCategory.mapReduce(
  // Map function
  function () {
    // We need to save this in a local var as per scoping problems
    var document = this;

    // You need to expand this according to your needs
    var stopwords = ["the", "this", "and", "or"];

    for (var prop in document) {
      // We are only interested in strings and explicitly not in _id
      if (prop === "_id" || typeof document[prop] !== "string") {
        continue;
      }

      document[prop].split(" ").forEach(function (word) {
        // You might want to adjust this to your needs
        var cleaned = word.replace(/[;,.]/g, "");

        if (
          // We neither want stopwords...
          stopwords.indexOf(cleaned) > -1 ||
          // ...nor string which would evaluate to numbers
          !isNaN(parseInt(cleaned)) ||
          !isNaN(parseFloat(cleaned))
        ) {
          return;
        }
        emit(cleaned, document._id);
      });
    }
  },
  // Reduce function
  function (k, v) {
    // Kind of ugly, but works.
    // Improvements more than welcome!
    var values = { documents: [] };
    v.forEach(function (vs) {
      if (values.documents.indexOf(vs) > -1) {
        return;
      }
      values.documents.push(vs);
    });
    return values;
  },

  {
    // We need this for two reasons...
    finalize: function (key, reducedValue) {
      // First, we ensure that each resulting document
      // has the documents field in order to unify access
      var finalValue = { documents: [] };

      // Second, we ensure that each document is unique in said field
      if (reducedValue.documents) {
        // We filter the existing documents array
        finalValue.documents = reducedValue.documents.filter(function (
          item,
          pos,
          self
        ) {
          // The default return value
          var loc = -1;

          for (var i = 0; i < self.length; i++) {
            // We have to do it this way since indexOf only works with primitives

            if (self[i].valueOf() === item.valueOf()) {
              // We have found the value of the current item...
              loc = i;
              //... so we are done for now
              break;
            }
          }

          // If the location we found equals the position of item, they are equal
          // If it isn't equal, we have a duplicate
          return loc === pos;
        });
      } else {
        finalValue.documents.push(reducedValue);
      }
      // We have sanitized our data, now we can return it
      return finalValue;
    },
    // Our result are written to a collection called "words"
    out: "words",
  }
);
