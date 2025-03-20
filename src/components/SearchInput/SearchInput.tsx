import React, { useState, useEffect, useCallback } from 'react';
import './SearchInput.css';

type SearchInputProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceMs?: number;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  placeholder,
  debounceMs,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const debouncedSearch = useCallback(
    (query: string) => {
      const timeoutId = setTimeout(() => {
        onSearch(query);
      }, debounceMs);

      return () => clearTimeout(timeoutId);
    },
    [onSearch, debounceMs],
  );

  useEffect(() => {
    const cleanup = debouncedSearch(searchQuery);
    return cleanup;
  }, [searchQuery, debouncedSearch]);

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder={placeholder}
      className="search-input"
      aria-label="Search products"
    />
  );
};

SearchInput.defaultProps = {
  placeholder: 'Search products...',
  debounceMs: 300,
};
