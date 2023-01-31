export function isNight(){
    const sunset = new Date(JSON.parse(localStorage.getItem("APIRES") as string)["daily"]["sunset"][0] * 1000) ;
        const sunsetHours = sunset.getHours()
    const sunsetMin = sunset.getMinutes()
    const currentTime = new Date()
    const currentHours = currentTime.getHours()
    const currentMin = currentTime.getMinutes()
    return (sunsetHours < currentHours ) ? sunsetMin < currentMin : false
}