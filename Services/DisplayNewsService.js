const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('e3a75d4713854bd38a4c837460404c51');

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
exports.getHeadlines = function(body, callback){
    var params = {
       // sources: 'bbc-news,the-verge',
        q: 'business',
       // category: 'business',
       // language: 'en',
        country: 'us'
    }
    newsapi.v2.topHeadlines(params).then(data =>{
        callback(null, data);
    }); 
};


// To query /v2/everything
// You must include at least one q, source, or domain

exports.getAllDetails = function(body, callback){
    params = {
        q: 'bitcoin',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        from: '2020-01-10',
        to: '2020-01-30',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
    }
    newsapi.v2.everything(params).then(data => {
            console.log('data::::',data);
            callback(null, data);
    });
};


// To query sources
// All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });