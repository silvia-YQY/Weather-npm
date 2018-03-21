#!/usr/bin/env node

var axios = require("axios")
//console.log(process.argv)

var data = {}

if(process.argv[2]){
    //查询城市id
    axios.get('https://weixin.jirengu.com/weather/cityid?',{
        params:{
            location:process.argv[2]
        }
    }).then(function(response){
        url= 'https://weixin.jirengu.com/weather'+'/now'
        data.params = {
            'cityid':response.data.results[0].id
        }
        getWeather(url,data) 
    }).catch(function(error){
        console.log(error)
    })
}else{
    url = 'https://weixin.jirengu.com/weather'
    getWeather(url) 
}

function getWeather(url,data){

    axios.get(url,data)
        .then(function(response){
            
        var Nowweather = response.data.weather[0].now
        console.log('城市',response.data.weather[0].city_name)
        console.log('日期：',response.data.weather[0].last_update)
        console.log('温度：',Nowweather.temperature)
        console.log('能见度：',Nowweather.visibility)
        console.log('风向：',Nowweather.wind_direction)
        console.log('空气质量（PM2.5）：',Nowweather.air_quality.city.pm25,Nowweather.air_quality.city.quality)

    })
    .catch(function(error){
        console.log(error)
    })
}