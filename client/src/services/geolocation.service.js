// 

class GeolocationService {
    // Callback function for asynchronous call to HTML5 geolocation
    // UserLocation(position) {
    // console.log("cncdjncdnjc" + position.coords.latitude, position.coords.longitude)
    // NearestCity(position.coords.latitude, position.coords.longitude);
    // }
    // Convert Degress to Radians
    Deg2Rad(deg) {
        return deg * Math.PI / 180;
    }
    PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
        console.log(lat1, lat2 + "user locationbbb")
        let lat1Temp = this.Deg2Rad(lat1);
        let lat2Temp = this.Deg2Rad(lat2);
        let lon1Temp = this.Deg2Rad(lon1);
        let lon2Temp = this.Deg2Rad(lon2);

        let R = 6371; // km
        let x = (lon2Temp - lon1Temp) * Math.cos((lat1Temp + lat2Temp) / 2);
        let y = (lat2Temp - lat1Temp);
        let d = Math.sqrt(x * x + y * y) * R;
        return d;
    }

    // var lat = 32.0907852; // user's latitude
    // var lon = 34.9222051; // user's longitude

    // var cities = [
    //     ["petach tkava", 32.0907852, 34.9222051, "blah"],
    //     ["dimona", 31.0187041, 35.1658003, "blah"],
    //     ["london", 51.5285582, 0.0384839, "blah"],
    //     // ["city4", 5, 80, "blah"]
    // ];
    // const copyCity = [];
    //const breweries=[]
    sortAlpha(copyCity) {
        const breweries = [...copyCity].sort((a, b) => {
            if (a.dif < b.dif) return -1;
            if (a.dif > b.dif) return 1;
            return 0;
        });
        console.log("arry sorted ", breweries)
        debugger
        return breweries;
        // this.setState({ breweries: breweries });
    }

    async beginSort(latitude, longitude, cities) {

        let minDif = 99999;
        let closest;


        let copyCity = []
        debugger
        for (let index = 0; index < cities[0]["value"].length; ++index) {
            const dif = await this.PythagorasEquirectangular(latitude, longitude, cities[0]["value"][index]["location"]["lat"], cities[0]["value"][index]["location"]["lng"]);
            //copyCity.push({ dif, index })
            if (dif < minDif) {
                closest = index;
                minDif = dif;
            }

            console.log(index + "i")
            console.log(dif + "dif")
            //copyCity.push({ "dif": dif, "index": index })

            copyCity[index] = { "dif": dif, "index": index }
            console.log(copyCity[index] + "jckj")
        }
        debugger
        return this.sortAlpha(copyCity);
    }
}

export default new GeolocationService()