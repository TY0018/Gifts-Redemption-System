import redeemService from '../src/services/redeemService';

describe('redeem Function Tests', () => {
  //test case: Check if redeem result return false when team name is invalid
  test('redeem Function - Invalid Team Name', async () => {
    const invalidTeamName = '   ';

    const result = await redeemService(invalidTeamName);

    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });
  test('redeem Function - Invalid Team Name', async () => {
    const invalidTeamName = 'sdad\\ asdasd ';

    const result = await redeemService(invalidTeamName);

    const expectedResult = false;

    expect(result).toEqual(expectedResult);
  });
});
