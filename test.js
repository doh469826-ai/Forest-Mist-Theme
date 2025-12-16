// ANSI Color definitions (Foreground/Background)
const COLORS = {
    charcoal: '\x1b[30m', crimson: '\x1b[31m', mint: '\x1b[32m', gold: '\x1b[33m',
    ocean:    '\x1b[34m', amethyst: '\x1b[35m', aqua: '\x1b[36m', cloud: '\x1b[37m',
    smoke:    '\x1b[90m', blood: '\x1b[91m', lime: '\x1b[92m', sunny: '\x1b[93m',
    sky:      '\x1b[94m', purple: '\x1b[95m', teal: '\x1b[96m', white: '\x1b[97m',
    reset: '\x1b[0m',
    bgNeonR: '\x1b[101m', 
    bgNeonG: '\x1b[102m', 
    bgPure: '\x1b[107m',
    bgOcean: '\x1b[44m',
    bgFire: '\x1b[41m',
    bgGem: '\x1b[45m'   
};

// Windows compatibility shim (optional, helps colors work on Windows CMD/PowerShell)
(function initWindowsConsole() {
    if (typeof module !== 'undefined' && module.exports && process.platform === 'win32') {
        try {
            require('child_process').execSync('cmd /c color', { stdio: 'ignore' });
        } catch (e) {}
    }
})();


// ------------------------------------------------------------------
// Large ANSI Art provided by the user, colored for the "Charcoal Mint" theme
// ------------------------------------------------------------------

const userProvidedArt = `
${COLORS.bgNeonR}
${COLORS.bgNeonG}
${COLORS.reset}
${COLORS.ocean}| $$$$$$$                        /$$           /$$$$$$$$ /$$                                                  
${COLORS.ocean}| $$__  $$                      | $$          |__  $$__/| $$                                                  
${COLORS.aqua}| $$  \\ $$  /$$$$$$   /$$$$$$$ /$$$$$$           | $$   | $$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$$
${COLORS.aqua}| $$$$$$$  /$$__  $$ /$$_____/|_  $$_/           | $$   | $$__  $$ /$$__  $$| $$_  $$_  $$ /$$__  $$ /$$_____/
${COLORS.mint}| $$__  $$| $$$$$$$$|  $$$$$$   | $$             | $$   | $$  \\ $$| $$$$$$$$| $$ \\ $$ \\ $$| $$$$$$$$|  $$$$$$ 
${COLORS.mint}| $$  \\ $$| $$_____/ \\____  $$  | $$ /$$         | $$   | $$  | $$| $$_____/| $$ | $$ | $$| $$_____/ \____  $$
${COLORS.lime}| $$$$$$$/|  $$$$$$$ /$$$$$$$/  |  $$$$/         | $$   | $$  | $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$ /$$$$$$$/
${COLORS.lime}|_______/  \\_______/|_______/    \\___/           |__/   |__/  |__/ \_______/|__/ |__/ |__/ \_______/|_______/ 
${COLORS.bgNeonG}
${COLORS.bgNeonR}
${COLORS.reset}
${COLORS.reset}`;


console.log(userProvidedArt);

// A clear, wide banner using background color to demonstrate the theme
console.log(`${COLORS.bgGem}${COLORS.white} -------------------------------------------------------------------------------- ${COLORS.reset}`);
console.log(`${COLORS.bgOcean}${COLORS.blood}  This ASCII is hinting that it's time to take advantage of this wonderful theme. ${COLORS.reset}`);
console.log(`${COLORS.bgGem}${COLORS.white} -------------------------------------------------------------------------------- ${COLORS.reset}`);
