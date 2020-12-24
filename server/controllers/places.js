
const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// const placesRequestUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.178176,34.8520448&radius=5500&type=food&keyword=cruise&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
const nearPlacesBySearch = async (req, res) => {
    console.log("arrive")
    console.log(req.params.key)
    console.log("location",req.params.location)
    ////////////////////////////לזכור שהמיקום לא מגיע ממש מדויק כמו שהוא קיים בריאקט - לבדוק
    request(
        { url: 
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${req.params.location}&radius=5500000&type=food&keyword=cruise&${req.params.key}` },
            
//  `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=32.178176,34.8520448&radius=5500&type=food&keyword=cruise&key=${req.params.key}` 
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                console.log("error")
                return res.status(500).json({ type: 'error', message: err.message });
            }
            console.log("good")
           // console.log(JSON.parse(body))
            res.json(JSON.parse(body));
        }
    )
}
module.exports = {
    nearPlacesBySearch
}