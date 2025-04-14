# 🌤️ React Weather App

A simple and modern weather forecast application built with React. It fetches real-time weather data using the **OpenWeatherMap API** and displays temperature, humidity, wind speed, and dynamic weather icons based on the selected city.

---

## 📸 Preview

![App Preview](https://github.com/asenchochev/Weather-app/blob/88db07bf52eb98e86c73536dc008ecc495c2e9d0/screenshot.png) 

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature in Celsius
- 💧 Show humidity level
- 🌬️ Show wind speed
- 🌤️ Dynamic weather icons based on current conditions
- 📡 Fetch data from [OpenWeatherMap API](https://openweathermap.org/)

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- CSS
- OpenWeatherMap API

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/asenchochev/Weather-app.git
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Key

Replace the API key in the file `Weather.jsx` with your own from [OpenWeatherMap](https://openweathermap.org/api):

```js
const WeatherId = 'YOUR_API_KEY';
```

Make sure you are using the `metric` unit in your API URL:
```js
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WeatherId}`;
```

### 4. Start the Application

```bash
npm run dev
```

The app will run on `http://localhost:5173` (or another available port).

---


## ✅ To Do / Future Improvements

- Enable search with "Enter" key
- Add loading and error handling states
- Save and display search history
- Add geolocation for automatic weather detection
- Make app responsive for mobile devices

---

## 📦 API Credits

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) for weather data.

---

## 📄 License

This project is licensed under the MIT License.  
Feel free to use it for learning or personal purposes.

---

## 🙌 Acknowledgments

Thanks to [OpenWeatherMap](https://openweathermap.org/) for their great API and to the React community for all the tools and support.

---
