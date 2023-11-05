const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: 'Welcome to electron desk app',
    width: 800,
    height: 600,
  });

  const startURL = url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
  });

  mainWindow.loadURL(startURL);
}

app.on('ready', createMainWindow);
