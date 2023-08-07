const axios = require('axios')

const fetchData = async () => {
    try {
        const data = await axios.get("https://cat-facts.hersokuapp.com/facts");
        console.log(data.data)
    } catch (err) {
        console.log(err)
    } finally {
        console.log("Reached finally block in async and await.")
    }
}

fetchData()