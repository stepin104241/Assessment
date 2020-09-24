var hotel = {
    name: 'abc',
    city: 'Mysore',
    type: ['ac'],
    cusine: [ 'chinese' ,'indian'],
    menu:{
        name: "dosa",
        cost: 60,
        category: "Breakfast",
    },
    rating: 4,
     getDetails: function(){
         for(var i of hotel){
             console.log(i);
         }
         

    
    }
}

