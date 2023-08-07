const promise = new Promise((resolve, reject) => {
    const name = "Prasanth";
    if (name == "Prasanth_T") {
        resolve(name);
    } else {
        reject("The expected name is: "+ name);
    }
});

promise
    .then( (name) => {
        console.log("Name returned by promise is: "+ name);
    })
    .catch( (err) => {
        console.log(err);
    })
    .finally( () => {
        console.log("Reached finally block.");
    });