import axios from 'axios';

const covidData = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = covidData;

  if(country) {
    changeableUrl = `${covidData}/countries/${country}`
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    alert('Something is wrong, please try again')
    console.log(error);
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${covidData}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    alert('Something is wrong, please try again')
    console.log(error);
  }
}

export const fetchCountries = async () => {
  try {
    const { data: { countries }} = await axios.get(`${covidData}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    alert('Something is wrong, please try again')
    console.log(error);
  }
}
