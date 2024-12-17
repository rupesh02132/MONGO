const { Discount, Category } = require('@mui/icons-material');
const mongoose = require('mongoose');
main().
then(() => {console.log('Connected to successfully')}).

catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema = new mongoose.Schema({
  title:{
      type: String,
      required: true,
      maxlength:15
  },
  author: {
      type: String,
  },
  price: {
      type: Number,
      min:10
     },
     Discount: {
      type: Number,
     default:0
     },
     Category: {
      type: String,
      enum: ['Fiction', 'Non-fiction']
     },
      genre: {
      type: [String],

     }
  });

const Book = mongoose.model('Book', bookSchema);
let book1 = new Book({
  title:'Physics XII',
  author:'Newton',
  price: 500,
  Discount: 5,
  genre:['Physics','Chemistry','Maths']
});
book1.save().then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err)
})