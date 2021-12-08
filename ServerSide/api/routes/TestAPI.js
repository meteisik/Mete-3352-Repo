var express = require("express");
var router = express.Router();
let comments=require('./comments');
let wololo=require('./wololo');
const fs = require('fs');




router.get("/", function(req, res, next) {

    res.send("API is working properly");
});

router.get("/fromJSON", function (req,res,next) {

    console.log(comments);
    res.send(JSON.stringify(comments));

});

router.post("/toJSON", function (req,res,next) {

    let name=req.body.names2
    let comment=req.body.helpMe
    console.log(name)
    console.log(comment)

//doesnt work for now lol
    let toWrite={
        'name': name,
        "comment":comment
            }

            let data=JSON.stringify(toWrite);

        fs.writeFile(wololo.comment, data, (err) => {

        if (err) throw err;
        console.log('Data written to file');
    });

    res.send('Worked')

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

