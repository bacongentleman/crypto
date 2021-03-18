const exp  = require("express");
const app = exp();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')

app.use(exp.urlencoded({extended: true}));
app.use(exp.json());
app.use(exp.static(path.join(__dirname, '/statics')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'))




const comments = 
[
    {
        id: uuid(),
        username: "billy",
        comment: "i like gabagoul!"
    },
    {
        id: uuid(),
        username: "poop",
        comment: "meow mix meow mix!"
    },
    {
        id: uuid(),
        username: "amadaeus",
        comment: "fat tuesday fat tuesday"
    }

]



app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/comments/:id', (req, res)=>{
    const  myid  = req.params;
    const foundEl = comments.find(function(c){
        console.log(c.id)
       return c.id == myid.id;
    })
    res.render('show.ejs', {comments:comments})
})

app.get('/comments', (req,res)=>{ 
    res.render('comments.ejs', {allComms: comments})
})

app.post('/comments', (req, res)=>{
    const newPost = req.body;
    comments.push({id:uuid(), username: newPost.username, comment: newPost.comment})
    console.log(newPost)
  
    res.redirect('/comments')
})


app.listen(3000, ()=>{
    console.log('listening on port 3000')
})