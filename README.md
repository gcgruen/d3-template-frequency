# How to make a frequency diagram (stripplot) with d3.js?

This is some dummy-code with dummy-data to produce a frequency chart (strip plot) that looks like this:

![](frequency-dummy.svg)

## What is this good for?
- As a base template to produce proof of concept visuals in this format (and then export it e.g. via the NYTimes' [SVG Crowbar](https://nytimes.github.io/svg-crowbar/)) to then adapt it to the desired design with help of software like Adobe Illustrator

- As a rough starting point to turn it into an full-fledged interactive chart

## Options

**Dimensionality**: You can display data with three dimensions with this chart (y-variable, x-scale, category)

**Scales**: In this example, one scale is categorical, the other one time-based. Both can changed to your needs

**Categories**: Are not essential, but optional (see next point)

**Dropdown menu**: Can as well be left out, if you have only one category. If you have multiple, it can assist discovering sub-patterns.


## Data structure

Each time stamp should be in its own row.

| Column 1: y-variable    			   | Column 2: category (color) - optional   			  | Column 3: datapoint (x-value)			     |
|--------------------------|--------------------------|--------------------------|
| This is where your different y-variables go,if you have more than one data point associated with one y-variable, enter each of them as a separate row | This is where the category your classes go that you want to use to color-code, in case you only have one data point for each y-variable this is probably not necessary |  This is where the actual datapoint (in this example it's a timestamp) goes that is associated with a certain y-variable & category combination |

## Real-life example (no dummy data)
This repo contains only a dummy example. If you want to see an example with actual data, please check out [this example](https://github.com/dw-data/party-donations/blob/master/interactive_visuals_EN_Desktop/EN-chart4-donation-frequency.js).


## Usage & questions
Feel free to use this code, any form of credit much appreciated, but not mandatory. If you have questions, feel free to get in touch via gcgruen[at]gmail[dot]com