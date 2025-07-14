import type { FC } from 'react';

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useFilters } from '../../hooks';

export const Filter: FC = () => {
  const { filters, setFilters } = useFilters();

  return (
    <Box>
      <FormControl sx={{ width: 200, mb: 4 }}>
        <InputLabel id="category">Category</InputLabel>
        <Select
          id="category"
          variant="outlined"
          label="Category"
          onChange={(e) =>
            setFilters((state) => ({
              ...state,
              category: e.target.value,
            }))
          }
          value={filters.category}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Bug">Bug</MenuItem>
          <MenuItem value="Feature">Feature</MenuItem>
          <MenuItem value="Documentation">Documentation</MenuItem>
          <MenuItem value="Refactor">Refactor</MenuItem>
          <MenuItem value="Test">Test</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200, mb: 4 }}>
        <InputLabel id="status">Status</InputLabel>
        <Select
          id="status"
          variant="outlined"
          color="success"
          label="Status"
          onChange={(e) =>
            setFilters((state) => ({ ...state, status: e.target.value }))
          }
          value={filters.status}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="todo">todo</MenuItem>
          <MenuItem value="in-progress">in-progress</MenuItem>
          <MenuItem value="done">done</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200, mb: 4 }}>
        <InputLabel id="priority">Priority</InputLabel>
        <Select
          id="priority"
          variant="outlined"
          color="info"
          label="Priority"
          onChange={(e) =>
            setFilters((state) => ({ ...state, priority: e.target.value }))
          }
          value={filters.priority}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="low">low</MenuItem>
          <MenuItem value="medium">medium</MenuItem>
          <MenuItem value="high">high</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
