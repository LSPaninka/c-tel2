# c-tel2

API REST con Node.js y Express que expone 3 endpoints GET, cada uno ejecutando un script de shell.

## Requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

El servidor se iniciará en el puerto **3000** por defecto. Puedes cambiar el puerto configurando la variable de entorno `PORT`:

```bash
PORT=4000 npm start
```

## Endpoints

| Método | Ruta       | Descripción                         |
|--------|------------|-------------------------------------|
| GET    | /script1   | Ejecuta `sh script1.sh`             |
| GET    | /script2   | Ejecuta `sh script2.sh`             |
| GET    | /script3   | Ejecuta `sh script3.sh`             |

### Ejemplos de uso

```bash
curl http://localhost:3000/script1
curl http://localhost:3000/script2
curl http://localhost:3000/script3
```

### Respuesta exitosa

```json
{
  "output": "Script 1 ejecutado correctamente\n",
  "stderr": ""
}
```

### Respuesta en caso de error

```json
{
  "error": "Mensaje de error",
  "stderr": "Salida de error del script"
}
```

## Scripts de shell

Los archivos `script1.sh`, `script2.sh` y `script3.sh` se encuentran en la raíz del proyecto. Puedes modificarlos para ejecutar cualquier comando que necesites.
