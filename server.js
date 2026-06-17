const express = require('express');
const app = express();


app.use(express.json());


let reportes = [];


app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// 2. RUTA POST: Permite recibir y registrar un nuevo reporte desde el cliente
app.post('/reportes', (req, res) => {
  
  
  const nuevoReporte = {
    id: reportes.length + 1, 
    tipo: req.body.tipo || "No especificado",
    descripcion: req.body.descripcion || "Sin descripción"
  };


  reportes.push(nuevoReporte);

 
  res.json({
    mensaje: "Reporte registrado",
    reporte: nuevoReporte
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
