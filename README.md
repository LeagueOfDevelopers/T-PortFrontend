
# This is a repo of a T-port project frontend

## Purpose

T-port gives people an opportunity to travel without bothering about booking and timing. You just enter your departure and arrival points with preferable date and time and T-port filters of millions of offers depending on the option you've selected. T-port will find most relevant tickets and routes so you can get to any point on Earth just from your home.

## Route JSON schematics
		{
			subRoutes: [{type: "string",
					     title: "string",
					     cost:  number,
				         currency: "string"},...],
		    totalCost: number,
		    totalCostCurrency: "string",
		    arrivalTime: millis,
		    duration: millis,
			points: {
				departure: "string",
				destination: "string"
			}
		}...
## Credits

Frontend made with love ❤️ and laziness by [Leon](https://vk.com/leon_bigbon).

Beautiful design by AlexandraU.

This website is built using *react* and *styled-components*. Although it is not big now, it will grow larger soon.