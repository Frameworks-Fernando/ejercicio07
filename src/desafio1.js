// Importamos el módulo nativo de Node.js
const os = require('os');

console.log('=== INFORMACIÓN DEL SISTEMA (DESAFÍO 1) ===');

// 1. Nombre del Sistema Operativo
console.log('Sistema Operativo:', os.type(), os.release());

// 2. Arquitectura de la CPU
console.log('Arquitectura:', os.arch());

// 3. Memoria RAM Libre (Convertida de bytes a GB para que sea legible)
const memoriaLibreGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
console.log('Memoria RAM Libre:', memoriaLibreGB, 'GB');

// 4. Memoria RAM Total
const memoriaTotalGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
console.log('Memoria RAM Total:', memoriaTotalGB, 'GB');

// 5. Información de los procesadores (CPUs)
console.log('Número de núcleos del procesador:', os.cpus().length);

// 6. Tiempo que lleva encendida la PC (en horas)
const horasEncendida = (os.uptime() / 3600).toFixed(2);
console.log('Tiempo de actividad del sistema:', horasEncendida, 'horas');