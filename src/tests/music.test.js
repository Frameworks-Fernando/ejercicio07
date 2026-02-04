// Validación del Modelo de Maybach Music (Página 31 y 33)
describe('Validación del Modelo de Música', () => {
  test('El objeto de canción debe tener exactamente 6 características', () => {
    const cancionTest = {
      title: 'Hustlin',
      artist: 'Rick Ross',
      album: 'Port of Miami',
      duration: '4:14',
      genre: 'Hip-Hop',
      coverUrl: 'https://link-a-la-imagen.jpg'
    };

    const totalPropiedades = Object.keys(cancionTest).length;
        
    // Esta es la prueba que exige el documento
    expect(totalPropiedades).toBe(6);
  });
});