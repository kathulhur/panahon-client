README

# [Panahon Client](https://panahon-client.vercel.app)

This is a three-day weather forecast app built with Next.js (TypeScript), styled with tailwindcss and using the [Weather API](https://www.weatherapi.com/).

![Panahon](/public/images/panahon-snaphot.png)

## Environment variables

The following environment variables are required to run the app:

**NEXT_PUBLIC_WEATHER_API_KEY**: Your Weather API key.

**NEXT_PUBLIC_WEATHER_API_BASE_URL**: The base URL of the Weather API.

## Getting started

Clone the repo:
git clone https://github.com/kathulhur/panahon-client.git

## Install the dependencies:

```Powershell
npm install
```

Set the environment variables in your env file:

## Set the Weather API key

```
NEXT_PUBLIC_WEATHER_API_KEY=YOUR_WEATHER_API_KEY
```

## Set the Weather API base URL

```
NEXT_PUBLIC_WEATHER_API_BASE_URL=https://api.weatherapi.com/v1/
```

## Start the development server:

```Powershell
npm run dev
```

Open the app in your browser at http://localhost:3000.

## Usage

To use the app, simply enter a location in the search bar and press Enter. The app will display the three-day weather forecast for the specified location.

## Features

-   Three-day weather forecast
-   Includes average temperature & chance of rain
-   Includes Celsius and Fahrenheit as units of temperature

To deploy the app to production, you can use a service like Vercel or Netlify.

### Contributing

If you would like to contribute to the app, please feel free to open a pull request.

#### LICENSE

This app is licensed under the MIT License.
