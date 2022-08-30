import './App.css';

import { FormControl } from '@mui/material';
import FormHeader from './components/FormHeader';
import FormBody from './components/FormBody';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ecoChecked: false,
      ecoValue: 150,
      extraChecked: false,
      extraValue: 350,
      travelChecked: false,
      travelValue: 0,
      total: 0
    }
  }

  ecoCheck(_ecoChecked) {
    this.setState({ ecoChecked: _ecoChecked });

    if (_ecoChecked) {
      this.setState({ total: this.state.total + parseFloat(this.state.ecoValue) });
    }
    else {
      this.setState({ total: this.state.total - parseFloat(this.state.ecoValue) });
    }
  }

  extraCheck(_extraChecked) {
    this.setState({ extraChecked: _extraChecked });

    if (_extraChecked) {
      this.setState({ total: this.state.total + parseFloat(this.state.extraValue) });
    }
    else {
      this.setState({ total: this.state.total - parseFloat(this.state.extraValue) });
    }
  }

  travelCheck(_travelChecked) {
    this.setState({ travelChecked: _travelChecked });

    if (_travelChecked) {
      this.setState({ total: this.state.total + parseFloat(this.state.travelValue) });
    }
    else {
      this.setState({ total: this.state.total - parseFloat(this.state.travelValue) });
    }
  }

  setEcoValue(value) {
    let total = this.state.total - parseFloat(this.state.ecoValue);
    total = total + parseFloat(value);
    this.setState({ total: total })
    this.setState({ ecoValue: value });
  }

  setExtraValue(value) {
    let total = this.state.total - parseFloat(this.state.extraValue);
    total = total + parseFloat(value);
    this.setState({ total: total })
    this.setState({ extraValue: value });
  }

  setTravelValue(value) {
    let total = this.state.total - parseFloat(this.state.travelValue);
    total = total + parseFloat(value);
    this.setState({ total: total })
    this.setState({ travelValue: value });
  }

  render() {
    return (
      <div className="App">
        <FormControl>
          <FormHeader total={this.state.total.toFixed(2)} checkAll={() => { this.setState({ ecoChecked: true, extraChecked: true, travelChecked: true, total: parseFloat(this.state.ecoValue) + parseFloat(this.state.extraValue) + parseFloat(this.state.travelValue) }) }} unCheckAll={() => { this.setState({ ecoChecked: false, extraChecked: false, travelChecked: false, total: parseFloat(0) }) }} />
          <hr />
          <FormBody setEcoValue={(value) => { this.setEcoValue(value) }} setExtraValue={(value) => { this.setExtraValue(value) }} setTravelValue={(value) => { this.setTravelValue(value) }} ecoValue={this.state.ecoValue} extraValue={this.state.extraValue} ecoChecked={this.state.ecoChecked} extraChecked={this.state.extraChecked} travelChecked={this.state.travelChecked} ecoCheck={(_ecoChecked) => { this.ecoCheck(_ecoChecked) }} extraCheck={(_extraChecked) => { this.extraCheck(_extraChecked) }} travelCheck={(_travelChecked) => { this.travelCheck(_travelChecked) }} />
        </FormControl>
      </div>
    );
  }
}

export default App;
