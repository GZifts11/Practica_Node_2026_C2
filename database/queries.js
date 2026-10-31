const queryBaseSelect = `SELECT
l.ID,
m.NOMBRE AS MATERIA,
l.NOMBRE,
t.NOMBRE AS TURNO,
c.NOMBRE AS COMISION ,
l.CANTIDAD_ALUMNOS
FROM Lenguajes l
JOIN
TURNOS t ON l.TURNO_ID = t.ID
JOIN
MATERIAS m ON l.MATERIA_ID = m.ID
JOIN
COMISIONES c ON l.COMISION_ID = c.ID`

module.exports = {
    getFrontentLanguages: queryBaseSelect,
    addLanguage: `INSERT INTO Lenguajes
            (MATERIA_ID
           ,NOMBRE
           ,TURNO_ID
           ,COMISION_ID
           ,CANTIDAD_ALUMNOS)
     VALUES
           (@MATERIA_ID
           ,@NOMBRE
           ,@TURNO_ID
           ,@COMISION_ID
           ,@CANTIDAD_ALUMNOS);`,
      getLanguagesById: `${queryBaseSelect}
            WHERE l.ID = @id`,
      deleteLanguageById: `DELETE FROM Lenguajes WHERE ID = @id`
}