// main process - backend , renderer for frontend
const path = require('path');
const { app, BrowserWindow , Notification} = require('electron');

const isMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV != 'development';

//uses chromium for rendering html css

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "eye health",
        width: isDev ? 1000 : 500,
        height: 600
    });

    //open devtools if in dev environment
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));

}


const NOTIFICATION_TITLE = 'Relax'
const NOTIFICATION_BODY = 'Relax your eyes for 20 seconds until the next notification or open the app!'

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}

function startCycle() {
    setInterval(function () {
        showNotification();
    }, 120000);
}

app.whenReady().then(createMainWindow).then(startCycle);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
  }
})

app.on('window-all-closed', () => {
  if (!isMac) {
      app.quit();
  }
})