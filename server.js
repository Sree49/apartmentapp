var express = require('express');
var http=require('http');
var path=require('path');
var bodyParser = require('body-parser');
var mongo=require('mongodb');
var app=express();
var router=express.Router();
var port=3000;
var assert=require('assert');
//var url='mongodb://localhost:27017/node-demo';
var mongoose = require('mongoose');
//view engine
app.set('public',path.join(__dirname,'public'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname,'apart')));

//body parser
app.use(bodyParser.json());
//app.use('/users',UserRoute);
app.use(bodyParser.urlencoded({extended:true}));


app.listen(port,function()
{
    console.log('server started on port '+port);
});

const cors=require('cors');
app.use(cors());
//var mongoose=require('mongoose');
//mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/demo-node");

var mongoDB = 'mongodb://localhost:27017/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//app.use("/", (req, res) => {
  //  res.sendFile(__dirname + "/apart/src/app/register/register.component.html");
//});
Schema=mongoose.Schema;
var userSchema=new Schema(
    {
    user:String,
       
    mob: String,

    email:String,
    pass:String,
      passw:String
    }
);



app.post('/enroll', function (req, res){
  console.log(req.body);
  console.log(req.body.email);
//  console.log(res);
 // res.status(200).send({"message" : "Register Data recieved"});
 var User=mongoose.model('User',userSchema);
  var myData = new User(req.body);

  
 
  
  console.log(myData);
  myData.save(function(error,result){
    //  console.log(userSchema);
      if(error)
      {
   //    result.send();
      }
    console.log('data sent');
       return res.json({message: 'DATA SAVED',status:"success"});
  })
});




var handlers={};
handlers.sample=function(data,callback) {
  if(data.method == 'post'){
    callback(200,{'name': 'sample handler'});
  }else{
    callback(405);
  }
};
handlers.notFound=function (data,callback) {
  callback(404);
};



app.post('/insert',function (req,res){
console.log(req.body);
var User=mongoose.model('User',userSchema);
let useData=req.body;
User.findOne({email : useData.email},(error,user)=>{

  if(error){
    console.log(error);
  }
  else{
    if(!user){
      res.status(401).send('invalid email');

    }else if(user.pass != useData.p){
      console.log(user.pass);
      console.log(useData.p);
        res.status(401).send('invalid password');
      }else{
        res.status(200).send(user);
      }
    }
  }
)
});


//var c=db.collection('users').estimatedDocumentCount();
 // console.log(c);
//db.collection('users').findOne({email : req.body.email},function(err,user){
  
 /* console.log('user found');
  if(err){
    console.log('this is error');
  }
  if(user && user.pass == req.body.pass ){
    console.log('user and pass are correct');
  }
  else{
    console.log('wrong credentials');
  }*/
//})
//}) 




  /*

app.post('/put', function (req, res){
  console.log(req.body);
//  console.log(res);
  res.status(200).send({"message" : "Login Data recieved"});  

  mongo.connect(url, { useNewUrlParser: true },function(err,client)
  {
      const collection = client.db("node-demo").collection("demo");
      console.log('connected');
console.log(item);
 if (req.body.findOne(req.body.email) == true ) {
  var err = new Error('A user with that email has already registered. Please use a different email..')
  err.status = 400;
  return next(err);
}
      //collection.insertOne(req.body,function(err,res)
     // {
      //  console.log("data inserted");
  
  // });
});
});
*/
var mongoose1=require('mongoose');
var mongodb = 'mongodb://localhost:27017/config';
mongoose1.connect(mongodb, { useNewUrlParser: true },function(){
  console.log("connected to config");
});
var db1 = mongoose1.connection;
db1.on('error', console.error.bind(console, 'MongoDB connection error:'),console.log("connected to config  db"));
//app.use("/", (req, res) => {
  //  res.sendFile(__dirname + "/apart/src/app/register/register.component.html");
//});
Schema=mongoose1.Schema;
var user=new Schema(
    {
      email:String,
    pass:String,
  
    }
);

var memq=mongoose.model('memq',user);

app.get('/first',function(req, res)  {
 /* console.log(req.body);
memq.find({email:"sree4363@gmail.com"},function(err,docs){
  if(err){
    
  }
  else{
    
    console.log(docs);
  }
})
})
//  db.twomem.find( ).count();


*/


    db1.collection('twomem')
    .find({ })
    // *****
    .toArray(function (err, user) {
        console.log(user)
        
        res.status(200).send(user);
      


    });
})

var mongoose3=require('mongoose');
var mongodb3 = 'mongodb://localhost:27017/node-demo';
mongoose3.connect(mongodb3, { useNewUrlParser: true },function(){
  console.log("connected to config");
});
var db3 = mongoose3.connection;
db3.on('error', console.error.bind(console, 'MongoDB connection error:'),console.log("connected to config  db"));
Schema=mongoose.Schema;
var listSchema=new Schema(
  {
  text1:String,
  }
);


app.post('/list1', function (req, res){
  console.log(req.body);

//  console.log(res);
 // res.status(200).send({"message" : "Register Data recieved"});
 var List=mongoose.model('List',listSchema);
  var myData1 = new List(req.body);

  
 
  
  console.log(myData1);
  myData1.save(function(error,result){
    //  console.log(userSchema);
      if(error)
      {
   //    result.send();
      }
    console.log('data sent');
       return res.json({message: 'DATA SAVED',status:"success"});
  })
});




var mongoose4=require('mongoose');
var mongodb4 = 'mongodb://localhost:27017/node-demo';
mongoose4.connect(mongodb4, { useNewUrlParser: true },function(){
  console.log("connected to node-demo");
});
var db4 = mongoose4.connection;
db4.on('error', console.error.bind(console, 'MongoDB connection error:'),console.log("connected to config  db"));
Schema=mongoose.Schema;
var list1Schema=new Schema(
  {
  text1:String,
  }
);

app.get('/help',function(req, res)  {
  var List1=mongoose.model('List1',list1Schema);
  db1.collection('lists')
     .find({ })
     // *****
     .toArray(function (err,list1Schema) {
         console.log(list1Schema)
         
         res.status(200).send(list1Schema);
       
 
 
     });
 })





 var mongoose5=require('mongoose');
 const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage')
 var mongodb5 = 'mongodb://localhost:27017/node-demo';
 mongoose5.connect(mongodb5, { useNewUrlParser: true },function(){
   console.log("connected to test");
 });
 var db5 = mongoose5.connection;
 db5.on('error', console.error.bind(console, 'MongoDB connection error:'),console.log("connected to config  db"));
 Schema=mongoose.Schema;
 
 var photoSchema=new Schema(
   {
   name:String,
   starttime:Date,
   place:String,
   time:String 
   }
 );
 
 app.get('/event',function(req, res)  {
   var first2=mongoose.model('Photo',photoSchema);
   db5.collection('events')
      .find({ })
      // *****
      .toArray(function (err,photo1Schema) {
      //    console.log(req.body);
        console.log(photo1Schema);
          
          res.status(200).send(photo1Schema);
        
  
  
      });
  })
 


/*
//https://youtu.be/9Qzmri1WaaE

var db = mongoose.connection;
const multer=require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {//destination where images will store
      cb(null, __dirname + '/src/assets/images')
  },
  filename: function (req, file, callback) {
      callback(null, Date.now() + path.extname(file.originalname));
  }
})
//configuration
const upload = multer({
  storage: storage,
})

//post data 
/*
router.post('/image', upload.single('file'), async (req, res) => {
  try {
      var newImage = new Image();
      newImage.file = req.file;
      newImage.description = req.body.description;
      await newImage.save();
      res.status(200).send(newImage);
  }
  catch (e) {
      console.log("failed " + e);
  }
})

app.get('/event', (req, res) => {
  Image.findById(req.params.id)
      .exec(function (err, data) {
          if (err) {
              console.log('error');
          }
          else {
              console.log("image returned "+data)
              res.json(data);
          }
      })

});
*/