// Purpose: Provide a function to get user input from the console.
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function getUserInput(prompt: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(prompt, answer => {
            resolve(answer.trim());
        });
    });
}

export default getUserInput;
