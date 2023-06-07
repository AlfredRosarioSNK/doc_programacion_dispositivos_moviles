# Alfred-Rosario2021-0798-React-native-app
Ucateci Project
***Flutter***

Descripción: Flutter es un framework de UI creado por Google para construir aplicaciones compiladas nativamente para móviles, web y desktop desde una única base de código.
Lenguajes de programación base: Dart
Página oficial: https://flutter.dev/
Repositorio de ejemplo: https://github.com/flutter/samples
Creador y empresa encargada de mantenimiento: Google
Fecha de creación: 2017

***Xamarin***

Descripción: Xamarin es un framework de desarrollo de aplicaciones móviles multiplataforma. Permite a los desarrolladores usar .NET y C# para crear aplicaciones que son ejecutables nativas para Android, iOS, y Windows.
Lenguajes de programación base: C#, .NET
Página oficial: https://dotnet.microsoft.com/apps/xamarin
Repositorio de ejemplo: https://github.com/xamarin/xamarin-forms-samples
Creador y empresa encargada de mantenimiento: Microsoft
Fecha de creación: 2011

***React Native***

Descripción: React Native es un framework creado por Facebook para desarrollar aplicaciones móviles nativas usando React y JavaScript.
Lenguajes de programación base: JavaScript, React
Página oficial: https://reactnative.dev/
Repositorio de ejemplos: https://github.com/facebook/react-native/tree/main/RNTester
Creador y empresa encargada de mantenimiento: Facebook
Fecha de creación: 2015

***Ionic***

Descripción: Ionic es un framework de código abierto para el desarrollo de aplicaciones móviles. Está construido sobre Angular y Apache Cordova, lo que le permite desarrollar aplicaciones con tecnologías web y luego empaquetarlas en una aplicación nativa.
Lenguajes de programación base: JavaScript, HTML, CSS (Angular, React, Vue)
Página oficial: https://ionicframework.com/
Repositorio de ejemplos: https://github.com/ionic-team/ionic-conference-app
Creador y empresa encargada de mantenimiento: Drifty Co.
Fecha de creación: 2013

***Swiftic***

Descripción: Swiftic es una plataforma de creación de aplicaciones para iPhone que permite a las empresas crear sus propias aplicaciones nativas sin necesidad de habilidades de codificación. Ofrece funciones como programas de lealtad, pedidos móviles, programación de citas y más.
Lenguajes de programación base: No requiere programación para el usuario final.
Página oficial: https://www.swiftic.com/
Creador y empresa encargada de mantenimiento: Swiftic
Fecha de creación: 2014

Flutter y React Native son buenos para desarrolladores que buscan un rendimiento cercano al nativo con la capacidad de compartir código entre plataformas.
Xamarin podría ser una buena opción si ya estás trabajando con .NET y C#, y quieres poder compartir código no sólo entre plataformas móviles, sino también con aplicaciones de escritorio y web.
Ionic es excelente si quieres desarrollar una aplicación con tecnologías web y tener la flexibilidad de elegir entre Angular, React o Vue.
Finalmente, Swiftic se destaca si estás buscando una solución sin código que permita a las empresas no técnicas crear su propia aplicación móvil.


#Uso de Redux y Context en React Native
***Redux***
Redux es una biblioteca de administración de estado predecible y de código abierto, ampliamente utilizada en aplicaciones React y React Native. Proporciona una forma elegante de manejar el estado de la aplicación y asegurar su consistencia en toda la aplicación.

#Uso de Redux en React Native
Instalación: Primero, instala Redux y las dependencias relacionadas en tu proyecto de React Native utilizando el administrador de paquetes npm:
Copy code
npm install redux react-redux
Crear acciones: Define las acciones que representan eventos o cambios en la aplicación. Estas acciones son objetos simples con una propiedad type que describe el tipo de acción y opcionalmente una propiedad payload con datos adicionales.

Crear reducers: Los reducers son funciones puras que toman el estado actual y una acción, y devuelven un nuevo estado modificado. Los reducers definen cómo cambia el estado de la aplicación en respuesta a las acciones.

Crear store: El store de Redux es el objeto central que mantiene el estado de la aplicación. Crea el store utilizando la función createStore de Redux, pasando el reducer raíz y, opcionalmente, el estado inicial.

Conectar componentes: Utiliza el componente Provider de react-redux para envolver tu componente raíz en el árbol de componentes. Esto permite que los componentes accedan al store de Redux. Luego, utiliza la función connect para conectar componentes específicos al store y mapear el estado y las acciones a las props del componente.

Dispatch de acciones: en los componentes se pueden hacer acciones utilizando la función dispatch proporcionada por Redux. Esto activa los reducers correspondientes y actualiza el estado de la aplicación.

#Context
Context es una característica de React que permite pasar datos a través del árbol de componentes sin tener que pasar manualmente las props a cada nivel. Es útil cuando se necesita compartir datos entre múltiples componentes sin tener que pasarlos explícitamente.

Uso de Context en React Native
Creación del contexto: Crea un contexto utilizando la función createContext de React. Esto devuelve un objeto que contiene un componente Provider y un objeto Consumer.

Proveedor de contexto: Utiliza el componente Provider en la parte superior del árbol de componentes para proporcionar los datos que deseas compartir. Configura el valor del contexto utilizando el prop value del componente Provider.

Consumo de contexto: En los componentes que deseen acceder a los datos del contexto, envuelve el contenido con el componente Consumer del contexto. Utiliza una función de renderizado como hijo del Consumer para acceder a los datos del contexto.

Actualización del contexto: Si necesitas actualizar los datos del contexto, puedes hacerlo dentro del componente proveedor utilizando el estado local o mediante el uso de Redux u otras soluciones de administración de estado.
