let cmd = ""
bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == "F") {
    	
    }
    if (cmd == "B") {
    	
    }
    if (cmd == "L") {
    	
    }
    if (cmd == "R") {
    	
    }
    if (cmd == "S") {
    	
    }
})
basic.forever(function () {
	
})
