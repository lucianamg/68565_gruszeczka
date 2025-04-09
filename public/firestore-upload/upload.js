

const admin = require('firebase-admin');
const fs = require('fs');

// 1. Reemplaza con el camino a tu archivo JSON de clave de cuenta de servicio
const serviceAccount = require('/Users/lu/Desktop/curso_react/aTempo/public/firestore-upload/atempo-fe8e1-firebase-adminsdk-fbsvc-493c752f04.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// 2. Reemplaza con el camino a tu archivo JSON de productos
const filePath = '/Users/lu/Desktop/curso_react/aTempo/public/productos2.json';

// 3. Reemplaza con el nombre de tu colección en Firestore
const collectionName = 'products';

// Función para cargar los datos JSON desde el archivo
function loadJson(filePath) {
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

async function uploadData() {
  try {
    const jsonData = loadJson(filePath);

    // Asegúrate de que jsonData sea un array
    if (!Array.isArray(jsonData)) {
      console.error('Los datos JSON no son un array.');
      return;
    }

    // Itera sobre los datos JSON y agrega cada objeto como un documento a la colección
    for (const item of jsonData) {
      await db.collection(collectionName).add(item);
    }

    console.log('¡Datos subidos exitosamente!');
  } catch (error) {
    console.error('Error al subir los datos:', error);
  }
}

uploadData();
