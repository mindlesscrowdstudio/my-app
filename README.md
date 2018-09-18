

## CONTENIDOS
- [Notas sobre la prueba ]
Decidí realizar la prueba con el CLI de react, tiene un par de implementaciones y configuraciones que lo hacen ideal para un desarrollo -mejor dicho, bocetado de una posible aplicación.

Utilice dos componentes hijos para presentar la información.
El mayor reto fue trabajar con los ciclos de los componentes, no pude renderizar la data para los siguientes días, si bien logré hacer el request, tengo aun confusión en qué forma trabajar con los estados y propiedades de los componentes cuando necesitan compartir data a sus hermanos. En mi caso, app.js fue la pagina padre para poder pasar información de un componente a otro. Decidí utilizar dos componentes stateless ya que renderizan con mayor velocidad.

Intenté hacer el renderizado de los iconos que trae el servicio, pero nuevamente tuve problemas para determinar y saber cómo hacer para que el renderizado de los iconos espere a tener el valor del icon que la request regresaba comoparte de una de las propiedades. Lo saqué porque rompía. Otra cosa que no pude terminar fue la lògica condicional para ocultar el componente Board y mostrarlo unicamente cuando se hace selecciona una de las ciudaddes.

El request a la API lo realicé con el id, ya que la sugerencia de la API era esa, puesto que se podía prestar a confusiones si únicamente se pasaba como valor el nombre de la ciudad.

No realicé pruebas de testeo, nunca las hice para un proyecto como este.



-[Utilice materilize para dar soporte al grid.]


Para inicializar, npm install y posteriormente npm start para levantar el entorno.