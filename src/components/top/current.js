import "./current.css"


export default function Current(props) {
    return (
        <div className="weather">
            <div className="Card">
                <div>
                    <p className="city">{props.currentWeather.city}</p>
                <p className="description">{props.currentWeather.weather[0].description}</p>
                </div>
                <img className="weather-img" alt="weather" src={`weather_img/${props.currentWeather.weather[0].icon}.png`}/>
            </div>

            <div className="details">
                <p className="temp">{Math.round(props.currentWeather.main.temp)}°C</p>
                <div className="details-right">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(props.currentWeather.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{props.currentWeather.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{props.currentWeather.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{props.currentWeather.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
            



        </div>

    )

}