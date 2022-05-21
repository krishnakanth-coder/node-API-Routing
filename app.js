const express =  require("express")

const app = express()
let homePage = app.get("/",(request,response)=>{
    response.send("Home Page")
})
let aboutPage = app.get("/about",(request,response)=>{
    response.send("About Page")
})

app.listen(3000)
module.exports = homePage;