 const Validator = (req,res,next)=>{
   const data = req.body;
   
   if(!data.name || !data.email|| !data.password || !data.gender|| !data.age || !data.height || !data.weight || !data.disease){
      res.status(400).send({
         "err":"Fill all the details"
      })
   }else if(data.age<16||data.age>=60){
      res.status(400).send({"err":"You are not eligible to create account because of your age"})
   }else {
      next();
   }
 
 }

 module.exports={
    Validator
 }