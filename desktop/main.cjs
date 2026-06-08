const { app, BrowserWindow, protocol } = require("electron");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");

protocol.registerSchemesAsPrivileged([
  {
    scheme: "liveplan",
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
    },
  },
]);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 980,
    minHeight: 640,
    title: "LivePlan",
    backgroundColor: "#fbf8fa",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL("liveplan://app/frontend/index.html");
}

app.whenReady().then(() => {
  protocol.registerFileProtocol("liveplan", (request, callback) => {
    const url = new URL(request.url);
    const pathname = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
    callback({ path: path.join(rootDir, pathname) });
  });

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
