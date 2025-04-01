require('dotenv').config()

console.log(`Server running on port ${process.env.PORT}`)
console.log(`DB url: ${process.env.DB_HOST}, DB USER: ${process.env.DB_USER}`)
