/**
 * Write a script that creates a text file, writes data, reads it, and then deletes it.
 * Exercise: Modify it to use asynchronous functions (fs.promises).
 */
const fs = require('fs').promises;

async function handleFile() {
    /*
    1. Create a text file and write data
    2. Read the data from the file
    3. Delete the file after reading
    */

     //Create and Write file
     await fs.writeFile('02-exercises.text', 'Testing 123')
     console.log('File created.')

     //Read the data from the file
     const fileData = await fs.readFile('02-exercises.text', 'utf-8');
     console.log('File reading completed: ', fileData)

     //Delete file after read
     await fs.unlink('02-exercises.text');
     console.log('File deleted.')
    try {
        
    } catch (error) {
        console.error('Error:', error);
    }
}

handleFile();
