const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Welcome to electron desk app',
    width: 1280,
    height: 720,
  });

  const startURL = url.format({
    pathname: path.join(__dirname, 'public/index.html'),
    protocol: 'file',
  });

  mainWindow.loadURL(startURL);
}

app.on('ready', createMainWindow);
