// Import necessary modules and functions
import searchService from '../src/services/searchService';

// Describe the test suite
describe('Search Function Tests', () => {
  // Test case: Check if the search function returns the correct team name for a valid staff pass ID
  test('Search Function - Valid Staff Pass ID', async () => {
    const validStaffPassId = 'STAFF_LPJPQ0NMXTPY';

    // Call the search function with the valid staff pass ID
    const result = await searchService(validStaffPassId);

    // Expected result: The team name associated with the valid staff pass ID
    const expectedResult = 'HUFFLEPUFF';

    // Assert that the result matches the expected team name
    expect(result).toEqual(expectedResult);
  });
  test('Search Function - Invalid Staff Pass ID', async () => {
    const invalidStaffPassId = 'asdasd';

    // Call the search function with the invalid staff pass ID
    const result = await searchService(invalidStaffPassId);

    // Expected result: The team name to be null
    const expectedResult = null;

    // Assert that the result matches the expected team name
    expect(result).toEqual(expectedResult);
  });
});
