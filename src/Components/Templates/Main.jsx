import "./Main.css";
import React from "react";
import Header from "./Header";
import Conversion from '../../Components/Templates/Charts/Conversion'
import Metrics from '../../Components/Templates/Charts/Metrics'
import Kpi from '../../Components/Templates/Charts/Kpi'
import DatePicker from '../Templates/DatePicker'
import Selector from './Selectors/SelectorCluster'
import SelectorStore from './Selectors/SelectorStore'
import SelectorChannel from './Selectors/SelectorChannel'
import SelectorCategory from './Selectors/SelectorCategory'
import SelectorSubcategory from './Selectors/SelectorSubcaretogy'
import SelectorSegment from './Selectors/SelectorSegment'
import SelectorManufacture from './Selectors/SelectorManufacture'
import SelectorBrand from './Selectors/SelectorBrand'
import HomeIcon from '@material-ui/icons/Home'
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';



export default (props) => (
  <React.Fragment>
    <Header />
    <main className="content">
        <div>
          <div className="main-header">
              <DatePicker/>
              <div>
                <a href="#/"><AppleIcon className="home-button" color="disabled" fontSize="large"/></a>
                <a href="#/"><AndroidIcon  className="home-button" color="disabled" fontSize="large"/></a>
                <a href="#/"><HomeIcon className="home-button" color="disabled" fontSize="large"/></a>
              </div>
          </div>
          <div className="middle-header">
            <Selector/>
            <SelectorChannel/>
            <SelectorStore/>
            <SelectorCategory/>
            <SelectorSubcategory/>
            <SelectorSegment/>
            <SelectorManufacture/>
            <SelectorBrand/>
          </div>
          <div className="main-content">
              <div className="m-chart">
                <Conversion/>
              </div>
              <div className="m-chart">
                <Metrics/>
              </div>
          </div>
          <div className="kpi-chart">
            <div className="m-chart">
              <Kpi/>
            </div>
          </div>
        </div>
      </main>
  </React.Fragment>
);
