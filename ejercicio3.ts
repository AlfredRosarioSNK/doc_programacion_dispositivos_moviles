function smallestSubarray(arr: number[], S: number): number {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; // sumamos el elemento próximo a la ventana.

        // Encogemos la ventana desde el inicio siempre que la suma de la ventana sea mayor o igual a 'S'
        while (windowSum >= S) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart]; // restamos el elemento que sale de la ventana.
            windowStart++; // movemos el inicio de la ventana hacia la derecha.
        }
    }

    if (minLength === Infinity) {
        return 0; // si no encontramos ningún subarreglo que cumpla la condición, devolvemos 0.
    }

    return minLength;
}

// Ejemplo de uso:
console.log(smallestSubarray([2, 1, 5, 2, 3, 2], 7)); // Debería imprimir: 2
console.log(smallestSubarray([2, 1, 5, 2, 8], 7)); // Debería imprimir: 1
