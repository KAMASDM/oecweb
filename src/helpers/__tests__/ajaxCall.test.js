import ajaxCall from '../ajaxCall';
import axios from 'axios';

// Mock axios
jest.mock('axios');

describe('ajaxCall utility', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('makes successful API call and returns data', async () => {
    const mockData = { results: [{ id: 1, name: 'Test' }] };
    axios.mockResolvedValue({
      status: 200,
      data: mockData,
    });

    const result = await ajaxCall('/test-endpoint', { method: 'GET' });

    expect(result).toEqual({
      status: 200,
      isError: false,
      isNetwork: false,
      data: mockData,
    });
    expect(axios).toHaveBeenCalledWith({
      url: 'https://sweekarme.in/oecweb/api/test-endpoint',
      method: 'GET',
    });
  });

  it('handles API errors correctly', async () => {
    const mockError = {
      response: {
        status: 404,
      },
    };
    axios.mockRejectedValue(mockError);

    const result = await ajaxCall('/test-endpoint', { method: 'GET' });

    expect(result.isError).toBe(true);
    expect(result.status).toBe(404);
    expect(result.data).toBeNull();
  });

  it('handles network errors correctly', async () => {
    const mockError = new Error('Network Error');
    axios.mockRejectedValue(mockError);

    const result = await ajaxCall('/test-endpoint', { method: 'GET' });

    expect(result.isError).toBe(true);
    expect(result.isNetwork).toBe(true);
    expect(result.data).toBeNull();
  });

  it('constructs correct API URL', async () => {
    axios.mockResolvedValue({
      status: 200,
      data: {},
    });

    await ajaxCall('/academics/universities/', { method: 'GET' });

    expect(axios).toHaveBeenCalledWith({
      url: 'https://sweekarme.in/oecweb/api/academics/universities/',
      method: 'GET',
    });
  });
});
