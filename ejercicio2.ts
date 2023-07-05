function shortestDist(s: string, c: string): number[] {
    // Inicializamos un arreglo para guardar las distancias.
    // Lo llenamos con un número grande, para facilitar comparaciones posteriores.
    const distances: number[] = Array(s.length).fill(Number.MAX_SAFE_INTEGER);

    // Primera iteración de izquierda a derecha.
    let prevPosition = -1;
    for (let i = 0; i < s.length; i++) {
        // Si encontramos el caracter, guardamos su posición.
        if (s[i] === c) {
            prevPosition = i;
        }
        // Si ya hemos encontrado el caracter al menos una vez.
        if (prevPosition !== -1) {
            distances[i] = i - prevPosition;
        }
    }

    // Segunda iteración de derecha a izquierda.
    prevPosition = -1;
    for (let i = s.length - 1; i >= 0; i--) {
        // Si encontramos el caracter, guardamos su posición.
        if (s[i] === c) {
            prevPosition = i;
        }
        // Si ya hemos encontrado el caracter al menos una vez.
        if (prevPosition !== -1) {
            // Actualizamos la distancia si es más pequeña que la calculada anteriormente.
            distances[i] = Math.min(distances[i], prevPosition - i);
        }
    }

    // Devolvemos el arreglo de distancias.
    return distances;
}

// Ejemplo de uso:
console.log(shortestDist('helloworld', 'l'));
// Debería imprimir: [2, 1, 0, 0, 1, 2, 2, 1, 0, 1]