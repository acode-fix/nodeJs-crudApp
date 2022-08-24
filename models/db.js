const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/StudentDB',{
   // userNewUrlParser: true
},
 err=>{
      if( !err){
          console.log('mongodb connected')
      }
      else {
           console.log( 'error in connected: '+ err )
      }
 })

 require('./student.model')