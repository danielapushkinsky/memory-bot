// Made by Daniel Apushkinsky
// March 2018
var correctLoc;
var size = 3;
var state = 1;
var stop = false;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// get current state of the game
// where 0 is preview, 1 is other
function getState()
{
	state = 1;
	for (var i = 0; i < size; i++)
	{
		for (var j = 0; j < size; j++)
		{
			if (correctLoc[i][j] != 0)
			{
				state = 0;
				break;
				console.log(0);
			}
		}
	}
}

// Updates the size of the board
function updateSize(){
	var counter = 2;
	while(document.body.getElementsByClassName("square-row")[counter] != null){
		counter++
	}
	size = counter;
}

// get the current board layout stored as a 2d int array
// where 1 is an active square, and 0 is inactive
function getTiles()
{
	correctLoc = new Array(size);
	for (var i = 0; i < size; i++)
	{
		correctLoc[i] = new Array(size);
		for (var j = 0; j < size; j++)
		{
			if (document.body.getElementsByClassName("square-row")[i].getElementsByClassName("square ng-scope")[j].className.match("(active)"))
			{
				correctLoc[i][j] = 1;
			}
			else
			{
				correctLoc[i][j] = 0;
			}
		}
	}
}

// Click on the tile from given coordinates
function clickTile(a, b)
{
	angular.element(document.body.getElementsByClassName("square-row")[a].getElementsByClassName("square ng-scope")[b]).triggerHandler('mousedown');
}

// run this method to stop the bot
function end()
{
	stop = true;
}

// main method
async function run()
{
	updateSize();
	getTiles();
	getState();

	if (state == 0)
	{	
		await sleep(1000);

		for (var i = 0; i < size; i++)
		{
			for (var j = 0; j < size; j++)
			{
				if (correctLoc[i][j] == 1)
				{
					clickTile(i, j);
				}
			}
		}
	}

	await sleep(200);
	if (!stop)
	{
		run();	
	}
}

run();