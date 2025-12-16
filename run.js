// ANSI Color definitions (Foreground/Background)
const COLORS = {
    // Text Colors (Foreground) - Descriptive names for the Charcoal Mint theme
    charcoal: '\x1b[30m', crimson: '\x1b[31m', mint: '\x1b[32m', gold: '\x1b[33m',
    ocean:    '\x1b[34m', amethyst: '\x1b[35m', aqua: '\x1b[36m', cloud: '\x1b[37m',
    smoke:    '\x1b[90m', blood: '\x1b[91m', lime: '\x1b[92m', sunny: '\x1b[93m',
    sky:      '\x1b[94m', purple: '\x1b[95m', teal: '\x1b[96m', white: '\x1b[97m',
    reset: '\x1b[0m',

    // Background Colors (Bright) - Добавлены фоны
    bgDGrey: '\x1b[100m', bgNeonR: '\x1b[101m', bgNeonG: '\x1b[102m', bgNeonY: '\x1b[103m',
    bgNeonB: '\x1b[104m', bgNeonM: '\x1b[105m', bgNeonC: '\x1b[106m', bgPure: '\x1b[107m',
    bgFire: '\x1b[41m', bgLeaf: '\x1b[42m'
};

/**
 * Utility class for standardized, colored space station logging (now with backgrounds!).
 */
class ShipLogger {
    static getTimestamp() {
        const date = new Date();
        return date.toISOString().substring(11, 19); 
    }

    // Вспомогательный метод теперь принимает цвет фона для префикса (prefixBGColor)
    static log(prefixBGColor, prefixFGColor, prefixText, messageColor, message) {
        const timestamp = `${COLORS.smoke}[${this.getTimestamp()}]${COLORS.reset}`;
        // Форматирование префикса с фоном И цветом текста
        const formattedPrefix = `${prefixBGColor}${prefixFGColor} ${prefixText} ${COLORS.reset}`;
        const output = `${timestamp} ${formattedPrefix} ${messageColor}${message}${COLORS.reset}`;
        console.log(output);
    }

    static status(message) { // Белый текст на зеленом фоне (Leaf BG)
        this.log(COLORS.bgLeaf, COLORS.white, 'STATUS', COLORS.reset, message);
    }

    static telemetry(message) { // Цветной текст без фона для данных
        this.log('', '', 'TLM:', COLORS.aqua, message);
    }

    static anomaly(message) { // Черный текст на ярком желтом фоне (NeonY BG)
        this.log(COLORS.bgNeonY, COLORS.charcoal, 'ANOMALY', COLORS.gold, message);
    }

    static danger(message) { // Белый текст на ярком красном фоне (NeonR BG)
        this.log(COLORS.bgNeonR, COLORS.white, 'DANGER', COLORS.blood, message);
    }
    
    static success(message) { // Черный текст на ярком зеленом фоне (NeonG BG)
        this.log(COLORS.bgNeonG, COLORS.charcoal, 'SUCCESS', COLORS.lime, message);
    }
}

function runDeepSpaceMissionLogs() {
    console.log(`${COLORS.bgNeonB}${COLORS.pure}:: ODYSSEY DEEP SPACE MISSION LOGS [JUPITER FLYBY] ::${COLORS.reset}`);
    console.log(`${COLORS.ocean}====================================================${COLORS.reset}`);
    
    // --- Pre-flight Checks ---
    ShipLogger.status(`Initializing life support systems...`);
    ShipLogger.telemetry(`Habitat pressure nominal: ${COLORS.white}101.4 kPa${COLORS.reset}`);
    ShipLogger.telemetry(`Oxygen mix stability: ${COLORS.mint}Stable 20.9%${COLORS.reset}`);
    ShipLogger.status(`Activating primary thrusters for trajectory correction burn...`);
    ShipLogger.telemetry(`Loading burn profile: ${COLORS.amethyst}JUPITER_TC_PROFILE_V2.BIN${COLORS.reset}`);
    ShipLogger.telemetry(`SHA256 Hash Check: ${COLORS.smoke}a8f2d0c1e4b5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1${COLORS.reset}`);
    
    // --- Trajectory Burn ---
    ShipLogger.telemetry(`Fuel oxidizer level: ${COLORS.mint}98%${COLORS.reset}`);
    ShipLogger.telemetry(`Current velocity: ${COLORS.white}45.2 km/s${COLORS.reset} towards Jupiter SOI.`);
    ShipLogger.anomaly(`Minor fluctuation detected in port side plasma conduit (${COLORS.amethyst}C-44${COLORS.reset}). Auto-stabilizing.`);

    // --- First Failure Point (Включаем ссылки на бэкенд/API) ---
    ShipLogger.danger(`Main sensor array offline. Cannot receive navigation data.`);
    ShipLogger.status(`Attempting API reconnect to: ${COLORS.aqua}api.odyssey-mission.space{COLORS.reset}`);
    ShipLogger.status(`Switching to backup inertial guidance system (IGS)...`);
    
    ShipLogger.anomaly(`Backup IGS reports magnetic interference. Data highly corrupted.`);
    ShipLogger.telemetry(`Raw IGS Data (Binary): ${COLORS.smoke}0x4A757069746572204572726F7200BAADF00D${COLORS.reset}`);

    // --- Environmental Hazard ---
    ShipLogger.danger(`External hull temperature spiking to 800C! Approaching solar flare trajectory.`);
    ShipLogger.status(`Ejecting sacrificial data probe ${COLORS.purple}Probe-Delta-9${COLORS.reset} to gather further data.`);
    ShipLogger.telemetry(`Data probe confirmed ejected. Heat shields holding at ${COLORS.gold}45% capacity${COLORS.reset}.`);
    ShipLogger.telemetry(`Initiating data dump to ground control endpoint: ${COLORS.aqua}sftp://missioncontrol.gov/logs/flare_event.zip${COLORS.reset}`);


    ShipLogger.status(`Solar flare passed. Systems nominal.`);
    
    // --- Jupiter Approach ---
    ShipLogger.status(`Entering Jupiter's atmosphere for aerobraking maneuver.`);
    ShipLogger.telemetry(`G-force tolerance check: ${COLORS.white}4.2 G${COLORS.reset}. Crew reporting minor discomfort.`);
    ShipLogger.telemetry(`Altitude: ${COLORS.white}120,000 meters${COLORS.reset} above surface.`);

    // --- Second Failure Point ---
    ShipLogger.anomaly(`Gravity reading discrepancy! Local gravity fluctuates between ${COLORS.white}1.5G${COLORS.reset} and ${COLORS.white}3.1G${COLORS.reset}.`);
    ShipLogger.danger(`Navigation computer Kernel Panic! Recursive memory overflow exception (Code 0xDEADBEEF).`);
    ShipLogger.telemetry(`Memory Dump SHA256: ${COLORS.smoke}b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2${COLORS.reset}`);
    ShipLogger.status(`Manual reboot of Nav-Computer [${COLORS.cloud}Apollo AI${COLORS.reset}] initiated.`);
    ShipLogger.success(`Nav-Computer online. Re-routing power from non-essential lighting.`);
    
    // --- Mission Success ---
    ShipLogger.status(`Aerobraking complete. Stabilizing into high orbit.`);
    ShipLogger.success(`Mission objective ${COLORS.white}JUPITER_FLYBY${COLORS.reset} achieved. Entering long-haul cruise.`);
    ShipLogger.status(`Total mission duration logged: 4 days, 6 hours, 12 minutes.`);
    console.log(`${COLORS.bgNeonB}${COLORS.pure}----------------- End of Transmission ----------------${COLORS.reset}`);
}

// Windows compatibility shim for ANSI codes
(function initWindowsConsole() {
    if (typeof module !== 'undefined' && module.exports && process.platform === 'win32') {
        try {
            require('child_process').execSync('cmd /c color', { stdio: 'ignore' });
        } catch (e) {
            console.log(COLORS.gold + "Warning: Native Windows console color support may be limited." + COLORS.reset);
        }
    }
})();

// Call the main function to start the logs
runDeepSpaceMissionLogs();
