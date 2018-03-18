# Human Benchmark Visual Memory Game Bot
This is a bot that plays the Visual Memory game on Human Benchmark's website. For all the testing I have done it has never made a mistake, and theoretically should be able to go up to infinity.

![HighScore](https://i.imgur.com/zC49JjB.png?1)

# How to Use
1. Go to https://www.humanbenchmark.com/tests/memory
2. Hit F12 and go to "Console"
3. Copy and Paste the following minified javascript, then press enter
```js
var correctLoc;var size=3;var state=1;var stop=!1;function sleep(ms){return new Promise(resolve=>setTimeout(resolve,ms))}function getState(){state=1;for(var i=0;i<size;i++){for(var j=0;j<size;j++){if(correctLoc[i][j]!=0){state=0;break;console.log(0)}}}}function updateSize(){var counter=2;while(document.body.getElementsByClassName("square-row")[counter]!=null){counter++}size=counter}function getTiles(){correctLoc=new Array(size);for(var i=0;i<size;i++){correctLoc[i]=new Array(size);for(var j=0;j<size;j++){if(document.body.getElementsByClassName("square-row")[i].getElementsByClassName("square ng-scope")[j].className.match("(active)")){correctLoc[i][j]=1}else{correctLoc[i][j]=0}}}}function clickTile(a,b){angular.element(document.body.getElementsByClassName("square-row")[a].getElementsByClassName("square ng-scope")[b]).triggerHandler('mousedown')}function end(){stop=!0}async function run(){updateSize();getTiles();getState();if(state==0){await sleep(1000);for(var i=0;i<size;i++){for(var j=0;j<size;j++){if(correctLoc[i][j]==1){clickTile(i,j)}}}}await sleep(200);if(!stop){run()}}run()
```
4. Click on the game to start
5. To stop the bot type ```end()``` into console

# License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details

Created March 2018 by Daniel Apushkinsky
