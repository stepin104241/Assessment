var express = require('express');
var app = express();
var hotellist = require('./hotel.json');
app.get('/showlist',function(req,res){
    res.send(hotellist);
})
app.get('/search',function(req,res){
    var city = req.query.city;
    var sublist =[];
    var flag =0;
    for(const i in hotellist){
        if(hotellist[i].city == city){
            flag = 1;
            sublist.push(hotellist[i]);
            
        }
    }
    
    if(flag == 0){
        res.send('hotels under this city not found');}
        else{
        res.send(sublist);}
})
app.get('/hotelbytype',function(req,res){
    var newhotel=[];
    type=req.query.type;
    var flag=0;
    for(const ele in hotellist)
    {
    if(hotellist[ele].type==type){
       newhotel.push(hotellist[ele]);
       flag=1;
    }
    }
    if(flag==0)
    res.send("not found");
    res.send(newhotel)
    
    })

   

       app.get('/hotelbycuisine', function(req, res)
{
  cusine = req.query.cusine;
   var searchcuisine = [];
   var flag=0;
   for(const element in hotellist){
      
          if(hotellist[element].cusine==cusine)
          {
              searchcuisine.push(hotellist[element]);
          }
      }
      if(flag==0)
      res.send("not found");
      
  res.send(searchcuisine);
})
app.listen('3000', function(){
    console.log('server listening to port 3000');
})