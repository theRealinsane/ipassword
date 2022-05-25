const { BrowserWindow, app } = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        height: 800,
        width: 800
    })
    
    win.loadFile('./views/index.html')
}

app.whenReady().then(() => {
    createWindow();
    console.log("App Ready")
})