const axios = require('axios')

const data = axios.get("https://cat-facts.hersokuapp.com/facts");

data
    .then( (res) => {
        console.log(res);
    })
    .catch( (err) => {
        console.log(err);
    })
    .finally( () => {
        console.log("Reached finally block.")
    });


