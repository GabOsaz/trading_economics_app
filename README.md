## Project Description

An application showcasing a few economic data across 4 countries exposed from the Trading Economics API.

## Installation

Install trading_economics_app with yarn

```bash
  git clone https://github.com/GabOsaz/trading_economics_app.git
  cd trading_economics_app
  yarn
  yarn run dev
```
Install trading_economics_app with npm

```bash
  git clone https://github.com/GabOsaz/trading_economics_app.git
  cd trading_economics_app
  npm install
  npm run dev
```


## Features

Comparison of GDP data for Sweden, Mexico, New Zealand, Thailand:

- Full Year GDP Growth data.
- GDP from Agriculture, Construction, Manufacturing, Mining, Public Administration, Transport, and Utilities.
- Previous and Latest GDP values from Agriculture, Construction, Manufacturing, Mining, Public Administration, Transport, and Utilities.
- Forecasts on various indices across the four countries displayed on a table in a card.
- Earnings data across the four countries displayed in a table with pagination.
- Styled to fit across mobile, tabs, laptops and desktop devices.
- Compatible with default system theme appearances: light and darkmodes.

## Tech Stack

**Client:** Nextjs/Typescript, TailwindCSS, Tanstack Query(primarily for asynchronous data catching), Axios(for fetching async data).

**Note:** The flower-like icon shown on the bottom-left side of the screen is a visual representation of catched data on the system. This is courtesy of Tanstack Query, and is only visible in development environments. 
