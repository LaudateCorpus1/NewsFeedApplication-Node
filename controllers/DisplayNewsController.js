var displayNewsService = require('../Services/DisplayNewsService');

exports.displayHeadlines = function(req,res){
    let displayHeadlines = displayNewsService.getHeadlines(req.body, function(err, result){
        if(err)
            res.send(err);
        res.send(result);
      })
}

exports.getAllDetails = function(req,res){
    let displayAllDetails = displayNewsService.getAllDetails(req.body, function(err, result){
        if(err)
            res.send(err);
        res.send(result);
      })
}

