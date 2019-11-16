const proxy = require("http-proxy-middleware");

module.exports =(app)=>{
    app.use("/home",proxy({
        target:"https://webservice.juanpi.com",
        changeOrigin:true
    }))
}
//跨域的配置