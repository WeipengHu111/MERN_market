import cors from "cors";
import express from "express";
import morgan from "morgan";
import {DATABASE} from './config.js';
import mongoose from "mongoose";

const app = express(); // app variable

//database
mongoose.set("strictQuery", false)
mongoose.
    connect(DATABASE)
    .then(() => console.log("DataBase_Connected"))
    .catch((err) => console.log(err));

//middleware

app.use(express.json()) // if making a post request from client to server
//middleware is to help to receive the data
app.use(morgan("dev"))

app.use(cors())

//一个router就是一个action

//route - 返回api页面 中文：路由，给一个链接，把一个html页面返回
//传进来两个参数后， 这个方法会按照顺序assign谁是req，谁是res，只是在这个get方法
// app.get('/api', (req, res) => {
//     res.json({ //response as json data
//         data: 'hello from API' // date is the key, 'xxxx' is the value
//     });
// }); 

//get 请求指定页面信息，并返回实体主题
//first arguement - URL, second - callbackfunction
// => 函数体, 就像一个 request, respone handler
// client will send the request and server will send response 
//in between we can set some database or authercation ....
//{ } hashmap, key-value数据结构 line 17

//监听具体端口，匹配上面的路由
//没有监听接不到HTTP请求
//callback function: 启动的时候返回日志 server_running_on_port_8000
//
app.listen(7000, () => console.log("server_running_on_port_7000"));

//app.listen() in Express is like telling your app to start 
//listening for visitors on a specific address and port, 
//much like how Node listens for connections.