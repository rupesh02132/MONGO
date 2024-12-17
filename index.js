const mongoose = require('mongoose');
main().
then(() => {console.log('Connected to DB')}).

catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});
const User = mongoose.model('User', userSchema);

// User.updateMany({age:{$gte:30}},{age:45}).then((res)=>{
    // console.log(res)
// }).
// catch((err)=>{
//   console.log(err)
// })

// User.findOneAndUpdate({name:'bruce'},{age:45},{new:true}).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })


// User.deleteOne({name:'bruce'}).then((res)=>{
//   User.deleteMany({age:{$gte:30}}).then((res)=>{
    
//   console.log(res)  
// }).catch((err)=>{
//   console.log(err)
// })

User.findByIdAndDelete({_id:'675bddeb4d3de5c6073adc45'}).then((res)=>{
  console.log(res)  
}).catch((err)=>{
  console.log(err)
})
// User.insertMany([
//     {name:'tony',email:'tony@gmail',age:25},
//     {nmae:'peter',email:'peter@gmail',age:30},
//     {name:'bruce',email:'bruce@gmail',age:35}
    

// ]).then((res)=>{
//     console.log(res)
// })


// const user1 = new User({
//   name: 'John Doe',
//   email: 'HcK9b@example.com',
//   age: 30
// });


// const user2= new User({
//     name:'rahul',
//     email:'2EY7d@example.com',
//     age:25
// })
// user2.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })