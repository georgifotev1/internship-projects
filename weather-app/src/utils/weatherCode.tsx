import { WiDaySunny } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiDayFog } from "react-icons/wi";
import { WiFog } from "react-icons/wi";
import { WiDayShowers } from "react-icons/wi";
import { WiDaySleet } from "react-icons/wi";
import { WiDayRain } from "react-icons/wi";
import { WiDayRainMix } from "react-icons/wi";
import { WiDaySnow } from "react-icons/wi";
import { WiDayLightning } from "react-icons/wi";
import { WiDaySleetStorm } from "react-icons/wi";

export const codes = {
  0: {
    description: "Clear Sky",
    icon: <WiDaySunny />,
  },
  1: {
    description: "Mainly Clear",
    icon: <WiDayCloudy />,
  },
  2: {
    description: "Partly Cloudy",
    icon: <WiDayCloudy />,
  },
  3: {
    description: "Overcast",
    icon: <WiCloudy />,
  },
  45: {
    description: "Fog",
    icon: <WiDayFog />,
  },
  48: {
    description: "Rime Fog",
    icon: <WiFog />,
  },
  51: {
    description: "Slight Drizle",
    icon: <WiDayShowers />,
  },
  53: {
    description: "Moderate Drizle",
    icon: <WiDayShowers />,
  },
  55: {
    description: "Intense Drizle",
    icon: <WiDayShowers />,
  },
  56: {
    description: "Light Freezing Drizle",
    icon: <WiDaySleet />,
  },
  57: {
    description: "Intense Freezing Drizle",
    icon: <WiDaySleet />,
  },
  61: {
    description: "Slight Rain",
    icon: <WiDayRain />,
  },
  63: {
    description: "Moderate Rain",
    icon: <WiDayRain />,
  },
  65: {
    description: "Intense Rain",
    icon: <WiDayRain />,
  },
  66: {
    description: "Slight Freezing Rain",
    icon: <WiDayRainMix />,
  },
  67: {
    description: "Intense Freezing Rain",
    icon: <WiDayRainMix />,
  },
  71: {
    description: "Slight Snow Fall",
    icon: <WiDaySnow />,
  },
  73: {
    description: "Moderate Snow Fall",
    icon: <WiDaySnow />,
  },
  75: {
    description: "Intense Snow Fall",
    icon: <WiDaySnow />,
  },
  77: {
    description: "Snow Grains",
    icon: <WiDaySnow />,
  },
  80: {
    description: "Slight Rain Showers",
    icon: <WiDayRainMix />,
  },
  81: {
    description: "Moderate Rain Showers",
    icon: <WiDayRainMix />,
  },
  82: {
    description: "Intense Rain Showers",
    icon: <WiDayRainMix />,
  },
  85: {
    description: "Slight Snow Showers",
    icon: <WiDaySnow />,
  },
  86: {
    description: "Intense Snow Showers",
    icon: <WiDaySnow />,
  },
  95: {
    description: "Slight Thunderstorm",
    icon: <WiDayLightning />,
  },
  96: {
    description: "Moderate Thunderstorm",
    icon: <WiDayLightning />,
  },
  99: {
    description: "Thunderstorm with Hail",
    icon: <WiDaySleetStorm />,
  },
};
