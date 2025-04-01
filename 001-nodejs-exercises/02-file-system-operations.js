/**
 * Write a script that creates a text file, writes data, reads it, and then deletes it.
 * Exercise: Modify it to use asynchronous functions (fs.promises).
 */
const fs = require('fs').promises;

async function handleFile() {
    try {
        // Create a text file and write data
        await fs.writeFile('02-exercises.txt', 'Hello world');
        console.log('File created and data written.');

        // Read the data from the file
        const readFileData = await fs.readFile('02-exercises.txt', 'utf-8');
        console.log('File content:', readFileData);

        // Delete the file after reading
        await fs.unlink('02-exercises.txt');
        console.log('File deleted.');
    } catch (error) {
        console.error('Error:', error);
    }
}

handleFile();
