var system = require('system'),
	page = require('webpage').create(),
    renderElement = require('./renderElement.js'),
    Routes = require('./Routes.js'),
    app = new Routes();

page.viewportSize = {width: 1366, height: 768};

app.use(function(req,res,next){
	if(req.post.width && req.post.height){
		if(isNaN(parseInt(req.post.width)) && isNaN(parseInt(req.post.height))){
			req.post.width = Math.abs(Math.floor(req.post.width));
			req.post.height = Math.abs(Math.floor(req.post.height));	
		}
		else{
			req.post.width = null;
			req.post.height = null;
		}
	}
	next();
});

app.post('/',function(req, res) {
	if(!req.post.url){
		res.send("No URL received");
	}
	if(req.post.width && req.post.height){
		page.viewportSize = {width: req.post.width, height: req.post.height};
	}
	page.open(req.post.url,function(status){
		if(status !== "success"){
        	res.send(status);
		}
		else{
			setTimeout(function() {
				var pic = renderElement(page, 'body');
		    	res.send(pic);	
			}, req.post.timeout || 1000);
		}
	});	
});

app.listen(system.args[1] || 8000);

console.log('Listening on port ' + (system.args[1] || 8000));