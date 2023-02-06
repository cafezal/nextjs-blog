export default function bugger(type, content, color) {
    if (color === 'b') {
        console.log("\x1b[44m", type, content, "\x1b[0m")
    }
    if (color === 'r') {
        console.log("\x1b[41m", type, content, "\x1b[0m")
    }
    if (color === 'g') {
        console.log("\x1b[42m", type, content, "\x1b[0m")
    }
    
    
    
}