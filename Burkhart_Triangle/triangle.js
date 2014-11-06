/*
 createSeed ( initialBase )
 returns a vector that represents Burkhart Level 1
*/
function createSeed(initialBase) {
	var vector = [];
	vector.push(initialBase);
	return vector;
};

/*
 padSeed( seedAsArray )
 returns a padded vector from given seedAsArray. [0, ... , 0]
 */
 function padSeed(seedAsArray) {
 	var vector = [];
 	vector.push(0);
 	for (var i = 0; i < seedAsArray.length; i++) {
 		vector.push(seedAsArray[i]);
 	}
 	vector.push(0);
 	return vector;
 }

 /*
  newLevelFromPadded( paddedAsArray )
  returns a new vector from given padded array.
  */
  function newLevelFromPadded(paddedAsArray) {
  	var newLevel = [];
  	for (var i = 0; i < paddedAsArray.length-1; i++) {
  		var left = paddedAsArray[i];
  		var right = paddedAsArray[i+1];
  		var sum = left + right;
  		newLevel.push(sum);
  	}
  	return newLevel;
  }

  /*
   buildTriangle ( baseNumber, numberOfLevels )
   returns a 2-D Array, representing the built triangle
   */
   function buildTriangle(baseNumber, numberOfLevels) {
   	var levels = [];
   	var seed = createSeed(baseNumber);
   	levels.push(seed);
   	for (var i = 0; i < numberOfLevels-1; i++) {
   		var padded = padSeed(seed);
   		var newLevel = newLevelFromPadded(padded);
   		levels.push(newLevel);
   		seed = newLevel;
   	}
   	return levels;
   }
