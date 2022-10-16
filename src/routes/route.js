const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const cpu = require('../util/helper')
const cut = require('../validator/formatter')
const underscore = require('underscore')
const _ = require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("(M1) Calling my function  ",xyz.myFunction())
    console.log("(M2) Printing Current Date " , cpu.itsPublic())
    console.log("(M2.1) Printing Month " ,cpu.itsMonth())
    console.log("(M2.2) batch Info ",cpu.batchInfo())
    console.log("(M3) Chnaged To Lower Case =>" ,cut.lower())
    console.log("(M3.1) Trimed The ahead string =>" ,cut.trim())
    console.log("(M3.2) Changed To Upper Case =>" ,cut.upper())
    // console.log("Calling my function" , abc.myFunction1())
    console.log("The value of the constant is ",xyz.myUrl)
   
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)

    const arrMonths = ["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG"]
   
    let changeToFlatten = _.chunk(arrMonths,2)
    console.log("(M4) This Is Done USing Lodash =>",changeToFlatten)

    let arr = [1,3,5,7,9,11,13,15,17,19]
    let arr1 = _.tail(arr)
    console.log("(M4.1) This OutPut IS Done Using tail =>",arr1)
    
    // let duplicateArr =[] 
    let mergeing = _.union(["Arabian Sea"],["Korea"],["Netherland"],["Antarctica"],["Russia"],["Netherland"])
    console.log("(M4.2) This merging happend using union =>",mergeing)
   
    let pairing = [["b",3] , ["a",1]]
    
    let pairingKeys = _.fromPairs(pairing)
    console.log("(M4.3) This Got Paired using frompair Function =>",pairingKeys)
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

