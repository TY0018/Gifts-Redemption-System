import getUserInput from '../utils/getUserInput';

async function main() {
    let terminateProgram = false;

    while (!terminateProgram) {
        const staffPassIdPrompt = 'Enter staff pass ID (type "exit" to terminate): ';
        const staffPassId = await getUserInput(staffPassIdPrompt);

        if (staffPassId.toLowerCase() === 'exit') {
            terminateProgram = true;
            console.log('Program terminated.');
            process.exit(0);
        } else {
            try {
                const searchResult = await fetch(`http://localhost:3000/api/search/${staffPassId}`);
                const searchResultJSON = await searchResult.json();

                if (searchResult.status === 200) {
                    const teamName = searchResultJSON.teamName;
                    if (teamName != null) {
                        const verifyResult = await fetch(`http://localhost:3000/api/verify/${teamName}`);
                        const verifyResultJSON = await verifyResult.json();
                        if (verifyResult.status === 200 && verifyResultJSON.redeemed === false) {
                            const redeemResult = await fetch(`http://localhost:3000/api/redeem/${teamName}`, { method: 'PUT' });
                            if (redeemResult.status === 200) {
                                console.log('Redemption successful!');
                            } else {
                                console.log("Redemption failed.");
                            }
                        } else {
                            console.log("Team has already redeemed their gift.");
                        }
                    } else {
                        console.log('No team found for the staff.');
                    }
                } else {
                    console.log("Staff not found.");
                }
            }
            catch (error) {
                console.log('Please enter staff id.');
            }
        }
    }
}

export default main;
