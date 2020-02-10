var addArticleService = require('../Services/AddArticleService');
exports.UploadImage = function(req, res){
    let uploadImage = addArticleService.UploadImage(req.body, function(err, result){
    if(err)
        res.send(err);
    res.send(result);
  })
}