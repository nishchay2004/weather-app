import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion"
import "./forecast.css"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


export default function Forecast(props) {
    const currentDay = new Date().getDay();
    const comingDays = days.slice(currentDay, days.length).concat(days.slice(0, currentDay));
    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {props.forecast.list.splice(0, 7).map((item, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <div className="daily-item">
                                        <img alt="img" className="small-icon" src={`weather_img/${item.weather[0].icon}.png`} />
                                        <label className="day">{comingDays[index]}</label>
                                        <label className="description">{item.weather[0].description}</label>
                                        <label className="min-max-temp">{Math.round(item.main.temp_min)} °C / {Math.round(item.main.temp_max)}°C</label>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className="forecast-details">
                                    <div className="forecast-details-item">
                                        <label className="forecast-details-property">Pressure</label>
                                        <label className="forecast-details-value">{item.main.pressure} hPa</label>
                                    </div>
                                    <div className="forecast-details-item">
                                        <label className="forecast-details-property">Clouds</label>
                                        <label className="forecast-details-value">{item.clouds.all}%</label>
                                    </div>
                                    <div className="forecast-details-item">
                                        <label className="forecast-details-property">Humidity</label>
                                        <label className="forecast-details-value">{item.main.humidity}%</label>
                                    </div>
                                    <div className="forecast-details-item">
                                        <label className="forecast-details-property">Wind</label>
                                        <label className="forecast-details-value">{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="forecast-details-item">
                                        <label className="forecast-details-property">Feels like</label>
                                        <label className="forecast-details-value">{Math.round(item.main.feels_like)} °C</label>
                                    </div>
                                    <div className="forecast-details-item">
                                        <label className="forecast-details-property">Sea Level</label>
                                        <label className="forecast-details-value">{item.main.sea_level} </label>
                                    </div>

                                </div>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })}

            </Accordion>
        </div>

    )

}