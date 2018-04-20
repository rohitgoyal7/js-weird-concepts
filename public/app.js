console.log('start......')
var interval,counter=0;
interval = setInterval(function(){
	if(counter==0){
		console.time()
		for(let i=0;i<9999999999;i++){}
		console.timeEnd();
	}
	if(counter == 1){
		console.time();
	}
	if(counter == 100){
		console.timeEnd();
		clearInterval(interval);
	}
	counter++;
	console.log('hiiii')
},1000)
