const express = require('express')

const app = express()

const port = 5000

// function workingHoursMiddleware(req, res, next) {
//     const currentDate = new Date();
//     const day = currentDate.getDay();
//     const hours = currentDate.getHours();

//     if (day >= 1 && day <= 5 && hours >= 9 && hours <= 17) {
//         next();
//     } else {
//         res.send("Sorry, the service is unavailable outside of working hours.");
//     }
// }

// app.use(workingHoursMiddleware);

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/contactus.html')
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/Ourservices.html')
})


app.use(express.static('public'))


app.listen(port, console.log('Server is running'))