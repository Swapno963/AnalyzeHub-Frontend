# AnalyzeHub: Dashboard App Frontend

This is the frontend of the Dashboard App, built with React and utilizing D3.js for data visualization.

## Live Site

You can access the live site [here](https://analyze-hub-frontend.vercel.app/)

## Features

1. Interactive data visualizations with D3.js
2. Dynamic dashboards with bar charts, pie charts, line charts, box plots, and tables
3. API integration for data analysis

4. **Basic summary**

   - Hear we showing total data count,average of likelihod,intensity,relevance
   - Hear we showing maximun of likelihod,intensity,relevance
   - Hear we showing minimun of likelihod,intensity,relevance

5. **Count summary**

   - Analyzing the total number of records grouped by sector, topic, region, and country.

6. **Top Data**
   - Top 5 records ordered by intensity, impact, relevance, and likelihood from the dashbordModel
   - After retrieving the records, they are serialized using Django’s MyModelSerializer to convert the queryset into a JSON format for API response

## set up and Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Swapno963/AnalyzeHub-Frontend.git

   cd AnalyzeHub-Frontend
   ```

2. Install dependencies:

   ```sh

   npm install
   ```

3. Run the development server:
   ```sh
   npm run start
   ```

## Usage

- Access the application at `http://localhost:3000/`

## Contact

If you have any questions or feedback, feel free to contact me:

- Swapno Mondol - [Linkedin](https://www.linkedin.com/in/swapno-mondol/)- [Facebook](https://www.facebook.com/profile.php?id=100090206887787) - swapno963@gmail.com
