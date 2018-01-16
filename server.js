const express     = require('express');
const ejs         = require('ejs');
const multer      = require('multer');
let upload = multer({ dest: 'uploads/' })
const app         = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
	res.render('index');
})


app.post('/get-file-size', upload.single('avatar'), function (req, res, next) {
   res.render('getfilesize',{size:req.file.size});
})

let listener = app.listen((process.env.PORT || 8989), () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

