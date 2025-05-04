# Microservicio 3: MongoDB y Node.js

Algunos puntos importantes:
Estoy trabajando con el puerto 3000 del contenedor y 3000 de la maquina virtual, adem�s del 27017 del contenedor de MongoDB (que todav�a no hago, se hace en el Compose o de forma manual) y la m�quina virtual. Entonces, se necesita que estos esten abiertos en el puerto de seguridad de la m�quina virtual.

Lo segundo es revisar el archivo .env. Este contiene el puerto a usar del contenedor, y la direcci�n para usar una base de datos. Por ahora se llama biblioteca la base de datos que se va a conectar de MongoDB, pero ese nombre se puede cambiar; tambi�n hay que asegurar que existe la base de datos de MongoDB llamada biblioteca o al que se desee cambiar. 
Tambi�n en .env se dirige a localhost. Debe ser a la direcci�n IP del contenedor, o se puede usar facilmente el network para conectar ambos.

Trabajamos con una base de datos, la cual por ahora llam� biblioteca, pero puede cambiar (revisar arriba). Pero si es necesario que se trabaje con dos colecciones dentro (que son equivalentes a tablas para lenguaje SQL, ya que trabajamos con no SQL), una llamada reviews y otra llamada likes.
Si revisas los modelos, ver�s como es el cuerpo de cada archivo json que se puede enviar a likes o reviews. Un ejemplo de cuerpo para ingresar en una review:
{
  "id_user": 1,
  "id_book": 2,
  "comment": "Me entretuvo bastante su historia.",
  "punctuation": 5
}
Y para ingresar a likes:
{
    "id_user": 1,
    "id_review": 1
}
Las fechas se generan autom�ticamente, y los id igual, entonces no es necesario en el cuerpo. Aunque ojo: MongoDB crea siempre un id por defecto tipo: _id: Objectid('6816b9f0a1891a66a96d8abe'). Este lo estoy ocultando al llamarlo en alguna petici�n.


