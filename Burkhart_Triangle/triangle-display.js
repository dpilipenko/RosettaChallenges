/*
 a ( initialBase, numLevels )
 Modifies DOM's span element with id "triangle"
 */
 function a(initialBase, numLevels) {
 	if (isInt(initialBase) && isInt(numLevels)) {
 		var triangle = buildTriangle(initialBase, numLevels);
 		var sb = triangleAsString(triangle);
 		document.getElementById("triangle").innerHTML = sb;
 	}
 }

 /*
  triangleAsString ( triangle, htmlId )
  string representation of triangle
 */
 function triangleAsString(triangle) {
 	var stringbuilder = "";
 	for (var i = triangle.length - 1; i >= 0; i--) {
 		stringbuilder += triangle[i].toString() + "\n";
 	}
 	return stringbuilder;
 }

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}