describe('Pruebas de Funcionalidad de Productos', () => {
  test('Debería validar que un objeto de producto tiene 6 propiedades', () => {
    const productoPrueba = {
      nombre: 'Teclado',
      precio: 25.50,
      categoria: 'Accesorios',
      stock: 50,
      descripcion: 'Teclado mecánico RGB',
      estaDisponible: true
    };
        
    const keys = Object.keys(productoPrueba);
    expect(keys.length).toBe(6);
  });
});