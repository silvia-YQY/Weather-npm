#!/usr/bin/env node

var axios = require("axios")
//console.log(process.argv)

var data = {}

if(process.argv[2]){
    data.params = {
        city_name: process.argv[2]
    }
}

axios.get('http://weixin.jirengu.com/weather',data)
    .then(function(response){
        
        var Nowweather = response.data.weather[0].now
        console.log('日期：',response.data.weather[0].last_update)
        console.log('温度：',Nowweather.temperature)
        console.log('能见度：',Nowweather.visibility)
        console.log('风向：',Nowweather.wind_direction)
        console.log('空气质量（PM2.5）：',Nowweather.air_quality.city.pm25)

    })
    .catch(function(error){
        console.log(error)
    })