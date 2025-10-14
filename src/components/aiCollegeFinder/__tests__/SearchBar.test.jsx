import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  it('renders search input correctly', () => {
    const mockOnChange = jest.fn();
    render(<SearchBar value="" onChange={mockOnChange} />);
    
    const input = screen.getByPlaceholderText(/search courses, universities/i);
    expect(input).toBeInTheDocument();
  });

  it('displays the current value', () => {
    const mockOnChange = jest.fn();
    render(<SearchBar value="computer science" onChange={mockOnChange} />);
    
    const input = screen.getByDisplayValue('computer science');
    expect(input).toBeInTheDocument();
  });

  it('calls onChange when user types', () => {
    const mockOnChange = jest.fn();
    render(<SearchBar value="" onChange={mockOnChange} />);
    
    const input = screen.getByPlaceholderText(/search courses, universities/i);
    fireEvent.change(input, { target: { value: 'engineering' } });
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('renders search icon', () => {
    const mockOnChange = jest.fn();
    const { container } = render(<SearchBar value="" onChange={mockOnChange} />);
    
    const searchIcon = container.querySelector('svg');
    expect(searchIcon).toBeInTheDocument();
  });
});
