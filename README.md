¿Qué sucedió al usar async y await?
Al utilizar async y await, las funciones que interactúan con el usuario mediante la entrada en consola (addTask(), deleteTask() y completeTask()) se pueden llamar y ejecutar de forma asíncrona, pero se espera a que se resuelvan antes de continuar con la siguiente instrucción. 
Esto permite escribir un código más legible y similar a la programación sincrónica, evitando el anidamiento excesivo de callbacks o promesas encadenadas.

¿Qué sucedió al usar el método then()?
Al utilizar el método then() de las promesas, puedes encadenar acciones que se ejecuten una vez que una promesa se resuelva o se rechace. En este caso, se puede realizar el método then() para encadenar las acciones que deseas realizar después de llamar a las funciones addTask(), deleteTask() y completeTask().

Por ejemplo, puedes utilizar addTask().then(() => { console.log('Tarea agregada'); }) para mostrar un mensaje después de que se agregue una tarea exitosamente.

¿Qué diferencias encontraste entre async, await y el método then()?

async y await: 

Estas palabras clave permiten escribir código asincrónico de manera más similar a la programación sincrónica, lo que mejora la legibilidad. Al utilizar await, puedes esperar a que una promesa se resuelva antes de continuar con la ejecución del código. Sin embargo, se necesita usar una función marcada con async para poder utilizar await.

El método then(): Es un método de las promesas que se utiliza para encadenar acciones que se ejecutan cuando una promesa se resuelve o se rechaza. Puedes encadenar múltiples then() para realizar diferentes acciones en función del resultado de la promesa.
