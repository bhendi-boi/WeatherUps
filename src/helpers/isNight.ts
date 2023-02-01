import useWeather from "../hooks/useWeather";
export function isNight(){
    const {apiRes} = useWeather()
    const sunset = new Date(apiRes["daily"]["sunset"][0] * 1000) ;
        const sunsetHours = sunset.getHours()
    const sunsetMin = sunset.getMinutes()
    const currentTime = new Date()
    const currentHours = currentTime.getHours()
    const currentMin = currentTime.getMinutes()
    return (sunsetHours < currentHours ) ? sunsetMin < currentMin : false
}