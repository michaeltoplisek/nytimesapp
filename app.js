$("#search").on("click", function(e) {
  e.preventDefault();
  // const searchTerm = $('#queryInput').val();
  // const beginTerm = $('#beginInput').val();
  // const endTerm = $('#endInput').val();
  

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
  'api-key': "e41f32bad21a41b2a8f7ef9830620a24",
  'q': "ironman",
  'begin_date': "20000101",
  'end_date': "20180101"
  });
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(result) {
    console.log(result);
  });

  //retrieve value of dropdown
  const articles = ["0","1","2","3","4","5","6","7","8","9","10"]
  const artNum = $('#select').val();
  
  const limitedArt = articles.slice(0, artNum)
  
  console.log(limitedArt)
  console.log("it works")

 });