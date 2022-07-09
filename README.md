# Leaflet_Challenge

## Overview:
	Leaflet is a javascript library we can use to develop dynamic maps for data visualizations. As we have seen in other exercises, HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) allow us to display information to a user more easily and visually appealingly. Since users are familiar with HTML because websites are built using this language, the user interface can be much easier to use. This exercise will utilize Javascript, HTML, and CSS to feature data from a website hosting data regarding earthquakes. 
    
	We begin by creating our primary HTML foundation site and the javascript files we will need. This initial index.html site will act as the landing page for our website and, in this case, will also feature the data obtained from the earthquake data for visual analysis. We will create some basic styling parameters in our CSS file and some vital formatting details for our legend that will appear on the bottom right side of the map later. 

	Most of our work will take place in our logic.js file. Here we will create the javascript logic that will facilitate the actions needed for our index.html page to operate the way we want. We need to refer to the earthquake URL, make a basic map, create the primary layer and develop a connection to the map styling we need. In this exercise, we use Mapbox, which provides some additional layering functionality that is not available in the Open Street Map leaflet options by default. We will also utilize the D3 javascript function to obtain the information from the URL and develop our functions for the markers we want to appear on the map to visualize the earthquakes from the data. Once these portions of our script are completed, we will also add the legend to the map. 
	Using Javascript, HTML, and CSS, we can easily display our data and analysis in a visually appealing way and easily referenced by the user. We can also allow the information to be much easier to share with various users by hosting the pages on a website. 

## Instructions

The instructions for this activity are broken into two parts: 

* Part 1: Create the Earthquake Visualization 

### Part 1: Create the Earthquake Visualization

Your first task is to visualize an earthquake dataset. Complete the following steps:

1. Get your dataset. To do so, follow these steps: 

   * The USGS provides earthquake data in a number of different formats, updated every five minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize.

    * When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:

2. Import and visualize the data by doing the following: 

   * Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

       *  Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

   * Include popups that provide additional information about the earthquake when its associated marker is clicked.

   * Create a legend that will provide context for your map data.
