// Declaramos la función 'numWays', que toma dos parámetros: 
// 'n' (el número total de escalones) y 'X' (un array de los pasos posibles). 
// Esta función devuelve un número.
function numWays(n: number, X: number[]): number {

    // Creamos un array 'dp' (dynamic programming) de longitud 'n+1', lleno de ceros.
    let dp: number[] = Array(n + 1).fill(0);
    
    // Para 0 escalones, sólo hay una forma de subir (no hacer nada), 
    // por lo que establecemos dp[0] igual a 1.
    dp[0] = 1;
    
    // Recorremos cada número hasta 'n', comenzando por 1 (el número de escalones).
    for(let i = 1; i <= n; i++) {
        // Para cada número de escalones, recorremos el array de pasos posibles 'X'.
        for(let j = 0; j < X.length; j++) {
            // Si el número actual de escalones 'i' es mayor o igual al paso en consideración 'X[j]',
            // entonces es posible usar este paso para subir los escalones.
            if(i >= X[j]) {
                // Agregamos al valor actual dp[i] (inicialmente 0) 
                // el número de formas de subir 'i - X[j]' escalones 
                // (que ya ha sido calculado previamente).
                dp[i] += dp[i - X[j]];
            }
        }
    }
    
    // Finalmente, devolvemos el valor dp[n], que es el número total de formas 
    // de subir 'n' escalones utilizando los pasos posibles en 'X'.
    return dp[n];
}

// Prueba de la función numWays con 4 escalones y pasos posibles de 1 y 2 escalones. 
// Debe devolver 5 (las formas posibles son: 1,1,1,1; 2,1,1; 1,2,1; 1,1,2; 2,2).
console.log(numWays(4, [1, 2]));

// Prueba de la función numWays con 4 escalones y pasos posibles de 1, 3 y 5 escalones.
// Debe devolver 3 (las formas posibles son: 1,1,1,1; 1,3; 3,1).
console.log(numWays(4, [1, 3, 5]));
