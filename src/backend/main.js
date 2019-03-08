const createWindow = require('./createwindow.js');

const xesConverter = require('xes_converter');
const { app, ipcMain } = require('electron');
let window = null;

app.on('ready', () => {
	if (window === null)
		window = createWindow();

    ipcMain.on('messages', ({sender}, {type, data}) => {
        switch(type) {
            case 'convert-start':
                sender.send('info', {
                    type: 'convert-ready',
                    data: 'Converting Directory...'
                });
                break;
            case 'convert':
                xesConverter.process(data.uri, data.options).then(() => {
	                sender.send('info', {
		                type: 'display',
		                data: 'Finished Converting'
	                });
                });
                break;
        }
    });
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
});

app.on('activate', function () {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (window === null)
		window = createWindow();
});