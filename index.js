const express = require('express');
const server = require('http').Server(express);
const io = require('socket.io')(server);
const path = require('path');
const fetch = require('node-fetch');
const fs = require('fs');
let port = process.env.PORT || 3000;
const app = express();

app.use('/',express.static(path.join(__dirname, 'dist/wedupptest')));

app.get('/weduppapi',async (req,res)=>{

	let n = req.query.n;

	let textbyline = await fetch("https://gitlab.com/snippets/1824628/raw")
    .then(res => res.text())
    .then(body => readFile(body));


    let fre = await getnfreq(textbyline,n);
    //console.log(fre)
    //.then(textByLine => getnfreq(textByLine,n)) 
   	res.send(fre);
});	

const getnfreq = (async(text,n)=>{
	//console.log(text);
	let frequencies = new Object();
	console.log(n);
	for(let word in text){
		if(text[word] && !([ "the", "a", "of", "and", "in", "is", "to"].includes(text[word]))){
			if(frequencies.hasOwnProperty(text[word])){
				//console.log(text[word])
				frequencies[text[word]] += 1;
			}else{
				//console.log(text[word])
				let p = text[word]
				frequencies[p] = 1;
			}
		}
	}


	function sortProperties(obj){
		var sortable=[];
		for(var key in obj)
			if(obj.hasOwnProperty(key))
				sortable.push([key, obj[key]]); 
		sortable.sort(function(a, b){
		  return b[1]-a[1];
		});
		return sortable; 
	}

	var sortedFreq = sortProperties(frequencies);
	var results = [];

	if(n>0){
		for(var i = 0; i < Math.min(n,sortedFreq.length)	; i++){
  			results.push(sortedFreq[i][0]);
		}
	}

	

	return results;

})


const readFile = (async (body)=>{
	var text = body;
	var textByLine = text.replace( /[\n.,‘’'"]/g, " " ).toLowerCase().split(" ");
	return new Promise((resolve,reject)=>{
		//console.log(textByLine);
		resolve(textByLine);
	})
})

app.listen(port,()=>{
	console.log("server listening on port: "+port);
})
