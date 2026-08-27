import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080;

app.get('/', (req,res)=>{
    return res.json({msg: 'Helloooo sir🙂 v4'})
});

app.get('/health', (req,res)=>{
    return res.json({msg: 'ok'});
});

app.listen(PORT,()=>{
    console.log('Server is running on port:',PORT);
})