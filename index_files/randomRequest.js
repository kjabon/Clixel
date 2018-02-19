function getNewThing(apiUrl) {

   var data: {
  'jsonrpc': '2.0',
  'method': 'generateIntegers',
  'params': {
    'apiKey': '96f04c28-ee5d-446e-a763-e1c1f3c867a9',
    'n': 1,
    'min': 1,
    'max': 1000,
    'replacement': true,
    'base': 10
  },
  'id': 2601
};

$.ajax({
  url: 'https://api.random.org/json-rpc/1/invoke',
  type: "POST",
  data: JSON.stringify(data),// stringify data object
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  success: function(result) {
    $('#text').html(JSON.stringify(result));
    console.log(result);
  }
})};