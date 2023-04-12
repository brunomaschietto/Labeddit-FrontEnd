import React from "react";
import {
  DivSignals,
  HeaderMain,
  ImageBattery,
  ImageClock,
  ImageNetwork,
  ImageWifi,
} from "./styles";
import clock from "../../assets/clock.svg";
import networkSignal from "../../assets/networkSignal.svg";
import wifiSignal from "../../assets/wifiSignal.svg";
import batterySignal from "../../assets/batterySignal.svg";

const Header = () => {
  
  return (
    <HeaderMain>
      <div>
        <ImageClock src={clock} />
      </div>
      <DivSignals>
        <ImageNetwork src={networkSignal} />
        <ImageWifi src={wifiSignal} />
        <ImageBattery src={batterySignal} />
      </DivSignals>
    </HeaderMain>
  );
};

export default Header;
