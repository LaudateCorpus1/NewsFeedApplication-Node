const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//configuring the AWS environment
AWS.config.update({
    accessKeyId: "<!-- Access Key ID -->",
    secretAccessKey: "<!-- Secret Access Key -->"
});

var s3 = new AWS.S3();
  // exports.UploadImage = function(body,callback){
  //   var filePath = body.filePath;
  //   var params = {
  //       Bucket: '<-- Bucket Name -->',
  //       Body : fs.createReadStream(filePath),
  //       Key : "folder/"+Date.now()+"_"+path.basename(filePath)
  //     };
  //     s3.upload(params, function (err, data) {
  //       //handle error
  //       if (err) {
  //         console.log("Error", err);
  //         callback(err);
  //       }
  //       //success
  //       if (data) {
  //         console.log("Uploaded in:", data.Location);
  //         callback(data.location);
  //       }
  //     });
  // }

  exports.UploadImage = function (body, callback) {
      var filePath = body.filePath;
      var params = {
        Bucket: '<-- Bucket Name -->',
        Body : fs.createReadStream(filePath),
        Key : "folder/"+Date.now()+"_"+path.basename(filePath)
      };
      s3.upload(params,{
         onSuccess: function (data) {
            callback(null, data.location);
         },
         onFailure: (function (err) {
            callback(err);
        })
    })
 };
