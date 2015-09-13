var path = require('path');

// checks if a given file name is allowed (this is usually for reading or writing)
function checkExtension(fileName) {
	var allowedExtensions = ['.md', '.mdown', '.markdown', '.mkd', '.mkdn', '.txt'];
	return allowedExtensions.indexOf(path.extname(fileName)) >= 0;
}

exports.checkExtension = checkExtension;
