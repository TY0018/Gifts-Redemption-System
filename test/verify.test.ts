//Purpose: Test the verify function
import verifyService from '../src/services/verifyService';

describe('Verify Function Tests', () => {
  // Test case: Check if the verify function is able to check status for valid team names
  test('Verify Function - Valid Team Name', async () => {
    const validTeamName = 'HUFFLEPUFF';

    // Call the verify function with the valid team name
    const result = await verifyService(validTeamName);

    // Expected result: boolean value of true or false
    const expectedResult = true || false;

    expect(result).toEqual(expectedResult);
  });
  test('verify Function - Invalid Team Name', async () => {
    const invalidTeamName = 'asdasd';

    // Call the verify function with the invalid team name
    const result = await verifyService(invalidTeamName);

    // Expected result: return null
    const expectedResult = null;

    expect(result).toEqual(expectedResult);
  });
  test('verify Function - Invalid Staff Pass ID', async () => {
    const invalidTeamName = '   ';

    // Call the verify function with the invalid team name
    const result = await verifyService(invalidTeamName);

    // Expected result: return null
    const expectedResult = null;

    expect(result).toEqual(expectedResult);
  });
});
