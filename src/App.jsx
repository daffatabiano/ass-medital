import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaSearch, FaWater, FaWind } from 'react-icons/fa';

function App() {
  const [weather, setWeather] = useState({});
  const [search, setSearch] = useState('');
  const apiKey = '735a912ccd310b0caade9be1791e6987';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`
        );
        if (res.data.weather[0].id === 800) {
          setWeather({ weather: 'Clear' });
        }
        setWeather(res.data);
      } catch (error) {
        setWeather({ weather: 'Not Found' });
        console.log(error);
      }
    };

    fetchData();
  }, [apiKey, search]);
  console.log(weather);

  return (
    <div className="container">
      <div className="search-box">
        <i>
          <FaMapMarkerAlt />
        </i>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search some place"
        />
        <button type="button">
          <FaSearch />
        </button>
      </div>

      {weather?.weather && search.length !== 0 ? (
        <>
          {weather.weather === 'Not Found' || weather.weather === 'Clear' ? (
            <img
              src="/404.png"
              alt=""
              style={{
                width: '100%',
                height: '100%',
                margin: 'auto',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center',
                marginTop: '50px',
              }}
            />
          ) : (
            <>
              <div className="weather-box">
                <div className="box">
                  <div className="info-weather">
                    <div className="weather">
                      <img
                        src={
                          weather.weather[0].main === 'Haze'
                            ? '/mist.png'
                            : weather.weather[0].main === 'Rain'
                            ? '/rain.png'
                            : weather.weather[0].main === 'Clouds'
                            ? '/cloud.png'
                            : weather.weather[0].main === 'Clear'
                            ? '/clear.png'
                            : weather.weather[0].main === 'Snow' && '/snow.png'
                        }
                        alt="weather-conditions"
                      />
                      <p className="temperature">
                        {Math.round(weather.main.temp)}
                        <span>°C</span>
                      </p>
                      <p className="description">{weather.weather[0].main}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="weather-details">
                <div className="humadity">
                  <i>
                    <FaWater />
                  </i>
                  <div className="text">
                    <div className="info-humadity">
                      <span>{weather.main.humidity}%</span>
                    </div>
                    <p>Humadity</p>
                  </div>
                </div>

                <div className="wind">
                  <i>
                    <FaWind />
                  </i>
                  <div className="text">
                    <div className="info-wind">
                      <span>{weather.wind.speed} km/h</span>
                    </div>
                    <p>Wind</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : null}
    </div>
  );
}

export default App;
