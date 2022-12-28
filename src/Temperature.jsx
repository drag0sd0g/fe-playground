import { useState } from "react";
import React from "react";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function tryConvert(temperature, conversionFunc) {
  const inputTemp = parseFloat(temperature);
  if (Number.isNaN(inputTemp)) {
    return "";
  }
  const convertedOutput = conversionFunc(inputTemp);
  //ensure we round to 3 decimal points
  const roundedConvertedOutput = Math.round(convertedOutput * 1000) / 1000;
  return roundedConvertedOutput.toString();
}

function BoilingVerdict(props) {
  return props.celsius >= 100 ? (
    <p>The water boils</p>
  ) : (
    <p>The water doesn't boil</p>
  );
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function TemperatureCalculator() {
  const [tempData, setTempData] = useState({ temperature: "", scale: "c" });

  const handleCelsiusChange = (temperature) => {
    setTempData({ scale: "c", temperature });
  };

  const handleFahrenheitChange = (temperature) => {
    setTempData({ scale: "f", temperature });
  };

  const scale = tempData.scale;
  const temperature = tempData.temperature;
  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default TemperatureCalculator;
