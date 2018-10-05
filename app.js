$('#search').on('click', function () {
    const searchTerm = $('#queryInput').val();
    const beginTerm = $('#beginInput').val();
    const endTerm = $('#endInput').val();
   
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "e41f32bad21a41b2a8f7ef9830620a24"
      'q' : queryInput,
      'begin_date': beginInput,
      'end_date' : endInput
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(result) {
      console.log(result);
    });
   
   });