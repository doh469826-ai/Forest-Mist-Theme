// ANSI Color definitions (Foreground/Background)
const CLRS = {
    // Text Colors (Foreground)
    grey: '\x1b[30m', fire: '\x1b[31m', leaf: '\x1b[32m', sun: '\x1b[33m',
    sky:  '\x1b[34m', gem: '\x1b[35m', foam: '\x1b[36m', pale: '\x1b[37m',
    dGrey: '\x1b[90m', neonR: '\x1b[91m', neonG: '\x1b[92m', neonY: '\x1b[93m',
    neonB: '\x1b[94m', neonM: '\x1b[95m', neonC: '\x1b[96m', pure: '\x1b[97m',
    // Background Colors (Standard)
    bgGrey: '\x1b[40m', bgFire: '\x1b[41m', bgLeaf: '\x1b[42m', bgSun: '\x1b[43m',
    bgSky: '\x1b[44m', bgGem: '\x1b[45m', bgFoam: '\x1b[46m', bgPale: '\x1b[47m',
    // Background Colors (Bright)
    bgDGrey: '\x1b[100m', bgNeonR: '\x1b[101m', bgNeonG: '\x1b[102m', bgNeonY: '\x1b[103m',
    bgNeonB: '\x1b[104m', bgNeonM: '\x1b[105m', bgNeonC: '\x1b[106m', bgPure: '\x1b[107m',
    reset: '\x1b[0m'
};

/**
 * A utility class for standardized, colored console logging.
 */
class Logger {
    static getTimestamp() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour12: false });
    }

    // Helper method for logging with timestamp and colors
    static log(prefixColor, prefixText, messageColor, message) {
        const timestamp = `${CLRS.dGrey}[${this.getTimestamp()}]${CLRS.reset}`;
        const output = `${timestamp} ${prefixColor}${prefixText}${CLRS.reset} ${messageColor}${message}${CLRS.reset}`;
        console.log(output);
    }

    // Logging methods using specific colors from your theme
    static info(message) {
        this.log(CLRS.neonG, 'INFO:', CLRS.reset, message);
    }

    static confirm(message) {
        this.log(CLRS.bgLeaf + CLRS.grey, 'CONFIRM', CLRS.reset, message);
    }

    static alert(message) {
        this.log(CLRS.sun, 'ALERT:', CLRS.reset, message);
    }

    static issue(message) {
        this.log(CLRS.neonR, 'ISSUE:', CLRS.reset, message);
    }
    
    static success(message) {
        this.log(CLRS.bgNeonG + CLRS.grey, 'SUCCESS', CLRS.reset, message);
    }

    static critical(message) {
        this.log(CLRS.bgNeonR + CLRS.pure, 'CRITICAL', CLRS.reset, message);
    }
}


function runProductionSystem() {
    console.log(`${CLRS.bgGem}${CLRS.pure} --- Inventory & Production System v2.1 --- ${CLRS.reset}`);
    
    Logger.info(`Starting warehouse stock verification...`);
    Logger.info(`Loading supplier data from ${CLRS.foam}suppliers.db${CLRS.reset}`);
    
    Logger.confirm(`Database successfully synced with ${CLRS.sky}ERP-Server${CLRS.reset}.`);
    
    Logger.info(`Checking availability of component ${CLRS.gem}A-349 (Quartz)${CLRS.reset}...`);
    
    Logger.alert(`Low stock for ${CLRS.gem}B-112 (Copper)${CLRS.reset}. Below Minimum Order Quantity (MOQ).`);
    Logger.info(`Generating new purchase order ${CLRS.dGrey}#4829${CLRS.reset}`);
    
    Logger.issue(`Communication error with production line ${CLRS.fire}LINE_03${CLRS.reset}. No response from PLC controller.`);
    
    Logger.critical(`Detected critical file system error on disk ${CLRS.foam}/dev/prod_data${CLRS.reset}. Cannot write logs.`);

    Logger.info(`Switching to backup line ${CLRS.sky}LINE_04${CLRS.reset}...`);
    
    Logger.success(`Backup line ${CLRS.sky}LINE_04${CLRS.reset} activated. Production resumed.`);

    Logger.critical(`Server room temperature exceeding threshold (${CLRS.fire}95C!${CLRS.reset}). Emergency shutdown initiated!`);
    Logger.issue(`Activating emergency stop protocol for all processes.`);
    
    Logger.info(`All production systems offline. Uptime: 35s`);
    Logger.success(`Session complete. 👋`);
    console.log(`${CLRS.bgGem}${CLRS.pure} ---------------- Session Terminated ----------------- ${CLRS.reset}`);
}

// Windows ANSI escape sequence support boilerplate (same as before)
if (typeof module !== 'undefined' && module.exports) {
    // Enables ANSI escape sequences in Windows CMD/PowerShell if necessary
    try { require('child_process').execSync('cmd /c color', { stdio: 'ignore' }); } catch (e) {}
}

runProductionSystem();
