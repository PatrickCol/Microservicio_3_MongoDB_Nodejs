# Imagen base oficial de Node.js
FROM node:18

# Crear directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json antes para aprovechar la cache de Docker
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa tu app
EXPOSE 3000

# Definir comando para ejecutar la app
CMD ["node", "app.js"]
