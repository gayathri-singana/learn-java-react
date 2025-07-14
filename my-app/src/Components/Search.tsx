// Search.tsx
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  searchText: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({
  searchText,
  onSearchChange,
  placeholder = "Search...",
}) => {
  return (
    <TextField
      fullWidth
      placeholder={placeholder}
      value={searchText}
      onChange={(e) => onSearchChange(e.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default Search;
