import {app, BrowserWindow} from "electron";

const mainWindow = ()=> {
  const createMainWindow = new BrowserWindow({
    title:"Welcome to electron desk app",
    width: 800,
    height: 600,
  });
}
