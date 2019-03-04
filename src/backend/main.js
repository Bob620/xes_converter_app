const createWindow = require('./createwindow.js');

const xesConverter = require('xes_converter');
const { app, ipcMain } = require('electron');
let window = null;

app.on('ready', () => {
	if (window === null)
		window = createWindow();

    ipcMain.on('messages', (event, arg) => {
        switch(event) {
            case 'convert':
                xesConverter.process(arg.uri, arg.options);
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