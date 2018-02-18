function getNewThing(apiUrl) {

    data = {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": "96f04c28-ee5d-446e-a763-e1c1f3c867a9",
            "n": 1,
            "min": 1,
            "max": 1000,
            "replacement": true,
            "base": 10
        },
        "id": 884832
    }

    // ajax call to the api
    return $.ajax({
        type: "POST",
        url: "https://api.random.org/json-rpc/1/invoke",
        data: JSON.stringify(data),
        success: function(result) {
        	$('#result').html(data);
            console.log(result)
        },
        error: function(err) {
            console.log(err)
        }
    });
}