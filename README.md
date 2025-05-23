# ANDANDO VOY

Este proyecto es una API para gestionar rutas de senderismo, artículos de blog, marketplace de anuncios y perfiles de guías.
Incluye autenticación de usuarios mediante Firebase y subida de imágenes a Cloudinary.
Está construida con Node.js, Express y utiliza MongoDB Atlas como base de datos.

## Tecnologías Utilizadas

Backend: Node.js, Express

Base de Datos: MongoDB Atlas

Autenticación: Firebase Authentication + Sessions

Almacenamiento de Imágenes: Cloudinary


## Instalación y Configuración

Una vez clonado el repositorio del proyecto, seguir estos pasos:

### 1. Instalar dependencias

npm install

### 2. Configurar variables de entorno
Crear un archivo .env en la raíz del proyecto con las siguientes variables:

#### Puerto del servidor
PORT=3000

#### Conexión a MongoDB Atlas
MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

#### Firebase Admin SDK
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=<tu_firebase_project_id>
FIREBASE_PRIVATE_KEY_ID=<tu_firebase_private_key_id>
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n<tu_clave_privada>\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=<tu_firebase_client_email>
FIREBASE_CLIENT_ID=<tu_firebase_client_id>
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/<tu_firebase_client_email_codificado>
FIREBASE_UNIVERSE_DOMAIN=googleapis.com

#### Cloudinary
CLOUDINARY_CLOUD_NAME=<tu_cloudinary_nombre>
CLOUDINARY_API_KEY=<tu_cloudinary_api_key>
CLOUDINARY_API_SECRET=<tu_cloudinary_api_secret>

#### Seguridad
JWT_SECRET=<tu_jwt_secret>
SESSION_SECRET=<tu_session_secret>


### 3. Iniciar la aplicación
npm start

## Endpoints

🔐 Autenticación
POST   /api/auth/loginjwt         // Login de usuario
POST   /api/auth/logoutjwt        // Cerrar sesión
GET    /api/auth/verifySession    // Verificar sesión activa

📖 Blog
GET    /api/blog                   // Ver todos los posts
POST   /api/blog                   // Crear un nuevo post
PUT    /api/blog/:id                // Actualizar un post
DELETE /api/blog/:id                // Eliminar un post

🧭 Guías de rutas
GET    /api/guides                 // Ver perfiles de guías
POST   /api/guides                 // Crear perfil de guía
PUT    /api/guides/:id             // Actualizar perfil de guía
DELETE /api/guides/:id             // Eliminar perfil de guía

🛒 Marketplace
GET    /api/marketplace            // Ver anuncios
POST   /api/marketplace            // Crear nuevo anuncio
PUT    /api/marketplace/:id        // Actualizar anuncio
DELETE /api/marketplace/:id        // Eliminar anuncio

🛤️ Rutas de usuarios
GET    /api/users/routes/          // Ver rutas del usuario autenticado
POST   /api/users/routes/routes    // Crear una nueva ruta
DELETE /api/users/routes/:id       // Eliminar una ruta
GET    /api/users/routes/stats     // Ver estadísticas de rutas


## Desarrollado por Alejandro Prados.