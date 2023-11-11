const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
const env = require('dotenv');
env.config();


const appStatus = process.env.APP_STATUS;
const devToolOption = appStatus === 'local' ? true : false ;

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Welcome to electron desk app',
    width: 1280,
    height: 720,
    webPreferences: {
      devTools: devToolOption,
    },
  });

  const startURL = url.format({
    pathname: path.join(__dirname, 'public/index.html'),
    protocol: 'file',
  });

  mainWindow.loadURL(startURL);
  mainWindow.on('closed', function () {
    app.quit();
  });
  if (appStatus === 'local') {
    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.webContents.send('enable-top-navigation');
      mainWindow.webContents.send('set-app-name', process.env.APP_NAME);
    });
  } else {
    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.webContents.send('disable-top-navigation');
    });
  }
}

app.on('ready', createMainWindow);
