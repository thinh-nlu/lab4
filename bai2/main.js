function solveEquation(a,b,c) {
    let delta = b * b - 4 * a * c
    let x1,x2

    if (delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)
        return `Phương trình có 2 nghiệm: x1 = ${x1.toFixed(2)} và x2 = ${x2.toFixed(2)}`
    } else if (delta === 0) {
        x1 = -b / (2 * a)
        return `Phương trình có nghiệm kép: x1 = x2 = ${x1.toFixed(2)}`;
    } else {
        return "Phương trình vô nghiệm"
    }
}