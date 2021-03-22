import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../services';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    }

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <>
      <FormControl className={styles.formControl}>
        <h1>Covid</h1>
        <h2>Selecione o país:</h2>
        <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
        </NativeSelect>
      </FormControl>
    </>
  )
}

export default CountryPicker;
