const cleanPath = (path: string): string =>
  path
    .replace(/[áàäãâ]/g, 'a')
    .replace(/[éèëê]/g, 'e')
    .replace(/[íìïî]/g, 'i')
    .replace(/[óòöõô]/g, 'o')
    .replace(/[úùüû]/g, 'u')
    .replace(/[ÁÀÄÃÅ]/g, 'A')
    .replace(/[ÉÈËÊ]/g, 'E')
    .replace(/[ÍÌÏÎ]/g, 'I')
    .replace(/[ÓÒÖÕÔ]/g, 'O')
    .replace(/[ÚÙÜÛ]/g, 'U')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
    .replace(/[Ñ]/g, 'N')
    .replace(/[Ç]/g, 'C')
    .replace(/[ ]/g, '_')
    .replace(/[^a-zA-Z0-9_]/g, '');

export { cleanPath };
