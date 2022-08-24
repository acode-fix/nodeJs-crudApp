require('./models/db')
const express =  require('express');
const app = express();
 const jwt = require('jsonwebtoken');
 const path = require('path');
 const handlebars = require('handlebars');
 const exphbs =  require('express-handlebars');
 const {allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
 const bodyparser  = require('body-parser');

//app.use( express.json());
//app.use(express.urlencoded({extended:false}))

app.use( bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

     const studentController = require('./controllers/studentcontroller')



app.get('/', (req, res)=>{
    res.send(`<h2>  Welcome to Student Databse!  </h2>
              <h3>  Click here to access    <a   href="/student/list">  Student Database </a>  </h3>`)
});


app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs', exphbs.engine({ 
  handlebars: allowInsecurePrototypeAccess(handlebars),
   extname: 'hbs',
   defaultLayout:  'mainLayout',
   layoutsDir: __dirname +  '/views/layouts/'
}));

app.set('view engine', "hbs")






//   const users = [{
//       id:1,
//        name:'kola',
        
//   },{
//   id:2,
//   name:'ademola',
   
// }]


//   app.get('/user', (req,res)=>{
//      res.json(users); 
//   })

//    app.get('/user/:id',(req,res)=>{ 
//        const id =  req.params.id;
//       for(let user of users){
//           if( user.id ==  id ){
//              res.json(user);
//              return;
//           }
//       }
      
//         res.status(404).send('user not found.');
//    })

//  //  test jwt

//    app.post('/api/login',(req,res)=>{
           
//           const std = {
//                id:1,
//             name:'tester',
//             email:'test@gmail.com'
//           };
//              let  current_time = Date.now();
//             const payload = {
//                 iss:'localhost/web/nodejs',
//                 exp: Math.floor(Date.now() / 1000) + (60*1),
//                 data: std,

//             };

//             jwt.sign(payload,'secretkey',(err, token)=>{
//                   res.json({ message:'Login successfully', token:token});
//             });
//    });



//   app.post('/api/posts', verifyToken,(req,res)=>{ 
//          //res.send(req.token);
          
//       jwt.verify( req.token,'secretkey',(err, authData)=>{;
//         if(err){
//               res.status(403).send(err);
//         }else {

//               res.json(
//                 {message:'posted ....', authData} 
//               )
//         }
//       });
//       // res.json({message:'posted ....'})
//   });

//      function verifyToken(req,res,next){

//           const bearerHeader = req.headers['authorization'];
             
//             if(  typeof bearerHeader !==  'undefined'){
//                  const bearerToken = bearerHeader.split(' ')[1];
//                  req.token = bearerToken;
//                  //res.send(req.token);
//                   //return;
//                 next();
                
//             }else {
//                   res.send(403);
//             }

//      }


app.listen(3000, ()=> {console.log('server started at 3000')});

 app.use('/student',studentController)