document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('camera');
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  const appNameElement = document.getElementById('appName');
  /*const { ipcRenderer } = require('electron');*/
  let mediaStream;

  /*ipcRenderer.on('set-app-name', (event, appName) => {
    appNameElement.textContent = appName || 'Your Default App Name';
  });*/

  startButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        mediaStream = stream;
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  });

  stopButton.addEventListener('click', () => {
    if (mediaStream) {
      const tracks = mediaStream.getTracks();
      tracks.forEach(track => track.stop());
      video.srcObject = null;
    }
  });
});
