var express     = require("express"),
    app         = express(),
    bodyparser  = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended: true}));

var resultString = new Array(4);

app.get("/", function(req, res){
    res.render("index", {resultString: resultString});
});

app.post("/", function(req, res){
    if(req.body.totNum != undefined)
    {
        res.render("index", {resultString: exports.calculateSequence(req.body.totNum)});
        resultString = [];
    }
});

exports.calculateSequence = function(num) {
    resultString = new Array(4);
    var isOdd = true,
        divThree = false,
        divFive = false;

    for(var i=1; i<= num; i++) {
        divThree = false;
        divFive = false;

        addNumber(0, i);

        if(isOdd) {
            addNumber(1, i);
            isOdd = false;
        } else {
            addNumber(2, i);
            isOdd = true;
        }

        if(i%3 == 0) {
            divThree = true;
        }
        
        if(i%5 == 0) {
            divFive = true;
        }

        if(divThree && divFive) {
            addNumber(3, 'Z');
        } else if (divThree) {
            addNumber(3, 'C');
        } else if (divFive) {
            addNumber(3, 'E');
        } else {
            addNumber(3, i);
        }
    }

    return resultString;
}

function addNumber(index, numVal){
    if(resultString[index] == undefined) {
        resultString[index] = numVal;
    } else {
        resultString[index] += ' ' + numVal;
    }
}

app.listen(3002, "127.0.0.1", function() {
    console.log("App Started");
})