const express = require('express')
const router = express.Router()
const mongoose  = require('mongoose')
const Student = mongoose.model('Student')    


  router.get('/',(req,res)=>{
     res.render( 'student/add_edit',{
        viewTitle: 'Add and Edit Page'
    
    } )
  })

  router.post('/',(req,res)=>{
      
      if( req.body._id ==  '')
         insertRecord(req, res)
         else 
           updateRecord(req,res)
  })


  router.get('/list',(req,res)=>{
     
     Student.find((err, docs)=>{
    if(!err)
     res.render( 'student/list',{ list:docs })
       else 
       console.log( 'error during update ' + err )
  }  
     )
})

router.get('/:id',(req,res)=>{
     
    Student.findById( req.params.id,(err, docs)=>{
   if(!err)
    res.render( 'student/add_edit',{student:docs, viewTitle:'Update Student' })
      else 
      console.log( 'error during update ' + err )
 }  
    )
})

router.get('/delete/:id',(req,res)=>{
     
    Student.findByIdAndRemove( req.params.id,(err, docs)=>{
   if(!err)
    res.redirect('/student/list')
      else 
      console.log( 'error during delete' + err )
 }  
    )
})

module.exports = router

    function insertRecord(req,res){
       var student = new Student()
            student.fullname =  req.body.fullname;
            student.phone =  req.body.phone;
            student.email =  req.body.email;
            student.city =  req.body.city;
            student.save((err, doc)=>{ 
                if(!err){
                     res.redirect('student/list')   
                }else 
                      console.log( 'error during insertion' + err )
                   
            
            }
            )

    }


   function updateRecord(req, res){
         Student.findOneAndUpdate({
                _id:req.body._id
         },   req.body, {new:true},(err,doc)=>{
              if(!err){
                res.redirect('student/list')
              }else {
                console.log( 'error during update' + err ) 
              }
         }
             )      
   } 