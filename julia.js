let width = 100, height = 50;
let a, b, new_a, new_b;
let cx = 0, cy = 0;
let angle = 0;
let esc_radius = 5;
let max_iter = 10;
let line = "";

while (true) {
    cx = Math.sin(angle);
    cy = Math.cos(angle);
    angle += 0.01;
    console.clear();
    // console.time();
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            a = (x - 50) / 30;
            b = (y - 25) / 30;
            for (var n = 0; n < max_iter; n++) {
                new_a = a * a - b * b + cx;
                new_b = 2 * a * b + cy;
                if (new_a > esc_radius || new_b > esc_radius) {
                    break;
                }
                a = new_a;
                b = new_b;
            }
            if (n === max_iter) {
                line += "@";
            } else {
                line += " ";//`\u2080`;
            }
        }
        console.log(line);
        // document.write(`${line} <br \/>`);
        line = "";
    }
    // console.timeEnd()
}