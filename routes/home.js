  var mysql = require('./mysql');


exports.index  = function(req,res) {
var getdetails = "select * from gumball where id = 1";
		
 
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				
				res.render('gumball',{countgumballs:results[0].count_gumball,modelnumber:results[0].moel_number,serialnumber:results[0].serial_number});  
				console.log("results posts:"+jsonString);
	             res.send(JSON.stringify({userlist:results,success:true}));
			}
  
		}
  
  
   
)}
};
