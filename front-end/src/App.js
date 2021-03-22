import React from "react";

import { Header, CovidChart, CountryPicker, SalesChart, Footer } from "./components";
import styles from './App.module.css';
import { fetchData} from './services';

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
        <Header />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <CovidChart data={data} country={country}/>
        <SalesChart />
        <Footer />
      </div>
    )
  }
}

export default App;
