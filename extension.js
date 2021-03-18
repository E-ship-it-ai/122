const vscode = require('vscode');

// The deactivate function get's called upon closing Visual studio
function deactivate() {
	//Establishing constants to Import Shell,the current Direcotry and the File system library
	const fileSystem = require('fs');
	const { exec } = require('child_process');
	const This_Directory  = vscode.workspace.workspaceFolders[0].uri.fsPath;

	
	

	
		

	// 
	if(vscode.workspace.workspaceFolders !== undefined) {

		// 
		if(fileSystem.existsSync(This_Directory + '/.gitignore')){

			// 
			exec('git status', {cwd: This_Directory}, function(err, stdout, stderr) {

				
				var datetime = new Date().toLocaleString();
				//Looks if the repro is up to date
				if(!stdout.includes('up to date')) {
				// Commits the repo and adds the current datetime as a message 
				exec('git commit -m "'+ datetime +'"', {cwd: This_Directory});
				//Pushes the changes to GIThub
				exec('git push', {cwd: This_Directory});

				}


			});		

		} 

	} 	

}

module.exports = {
	deactivate
}