import React from "react";

import { Chart, CountryPicker, SalesChart } from "./components";
import styles from './App.module.css';
import { fetchData} from './api';

import mediarLogo from './assets/logo.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }


  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={mediarLogo} alt="Mediar company" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
        <SalesChart />
      </div>
    )
  }
}

export default App;
