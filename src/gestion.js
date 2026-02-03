const fs = require('node:fs/promises');

async function agregarUsuario(nuevoUsuario) {
  const ruta = './usuarios.json';

  try {
    // 1. Leer el archivo actual
    const data = await fs.readFile(ruta, 'utf-8');
        
    // 2. Convertir el texto a un Array de JavaScript
    const usuarios = JSON.parse(data);
        
    // 3. Agregar el nuevo usuario al array
    usuarios.push(nuevoUsuario);
        
    // 4. Guardar el array actualizado de vuelta al archivo
    // El 'null, 2' es para que el JSON se vea ordenado (con sangría)
    await fs.writeFile(ruta, JSON.stringify(usuarios, null, 2));
        
    console.log('✅ Usuario agregado con éxito.');
  } catch (error) {
    console.error('❌ Error al procesar el archivo:', error.message);
  }
}

// Probando el script
agregarUsuario({ id: 2, nombre: 'Ana', nivel: 'Intermedio' });