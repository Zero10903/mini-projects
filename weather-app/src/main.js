const btn = document.querySelector('.search__btn');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'YOUR_KEY',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

const fetchApi = async (search) => {
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${search}&days=3`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const getCurrent = (current) => {
  const currentTemp_Data = current.current.temp_c;
  const feelsLike_Data = current.current.feelslike_c;
  const windSpd_Data = current.current.wind_kph;
  const conditionText_Data = current.current.condition.text;
  const conditionIcon_Data = current.current.condition.icon;

  const temp = document.querySelector('.current__temp');
  const feelslike = document.querySelector('.current__feelslike');
  const windspd = document.querySelector('.current__windspd');
  const conditionText = document.querySelector('.current-condition__text');
  const conditionIcon = document.querySelector('.current-condition__icon');

  temp.textContent = `${currentTemp_Data}ºC`;
  feelslike.textContent = `${feelsLike_Data}ºC`;
  windspd.textContent = `${windSpd_Data} k/h`;
  conditionText.textContent = `${conditionText_Data}`;
  conditionIcon.src = `${conditionIcon_Data}`;
};
const getForecast = (forecast) => {
  for (let i = 0; i < 3; i++) {
    const day__Data = forecast.forecast.forecastday[i].date;
    const maxTemp_Data = forecast.forecast.forecastday[i].day.maxtemp_c;
    const minTemp_Data = forecast.forecast.forecastday[i].day.mintemp_c;
    const conditionText_Data =
      forecast.forecast.forecastday[i].day.condition.text;
    const conditionIcon_Data =
      forecast.forecast.forecastday[i].day.condition.icon;

    const day = document.querySelector(`.forecast__day--${i}`);
    const maxTemp = document.querySelector(`.forecast__maxtemp--${i}`);
    const minTemp = document.querySelector(`.forecast__mintemp--${i}`);
    const conditionText = document.querySelector(`.condition__text--${i}`);
    const conditionIcon = document.querySelector(`.condition__icon--${i}`);

    day.textContent = `${day__Data}`;
    maxTemp.textContent = `${maxTemp_Data}ºC`;
    minTemp.textContent = `${minTemp_Data}ºC`;
    conditionText.textContent = `${conditionText_Data}`;
    conditionIcon.src = `${conditionIcon_Data}`;
  }
};

btn.addEventListener('click', () => {
  const search = document.querySelector('.search__input').value;
  fetchApi(search)
    .then((forecast) => {
      console.log(forecast);

      getCurrent(forecast);

      getForecast(forecast);
    })
    .catch((error) => {
      console.error(error);
    });
});
