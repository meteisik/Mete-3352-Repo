var express = require("express");
var router = express.Router();

let wololo=require('./wololo');
const fs = require('fs');




router.get("/", function(req, res, next) {

    res.send("API is working properly");
});

//reads the JSON file and sends it to the thing
router.get("/fromJSON", function (req,res,next) {

    fs.readFile('./comments.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString) 
       res.send(jsonString)
    })

   

});

//writes to JSON file howveer it doesnt work for now
router.post("/toJSON", function (req,res,next) {

    let name=req.body.names2
    let comment=req.body.helpMe
    console.log(name)
    console.log(comment)

//appends to JSON file
    
    
    let toWrite={
        'name': name,
        "comment":comment
            }

            fs.readFile('./comments.json', function (err, data) 
            {
                let json = JSON.parse(data);
                json.push(toWrite);    
               
               
               
                fs.writeFile("./comments.json", JSON.stringify(json), function(err){
                  if (err) throw err;
                  console.log('The "data to append" was appended to file!');
                });
            })
});

router.get("/PlaceHolder2", function (req,res,next) {




    res.send()

});

router.get("/PlaceHolder3", function (req,res,next) {




    res.send()

});
router.get("/PlaceHolder4", function (req,res,next) {




    res.send()

});



module.exports = router;

