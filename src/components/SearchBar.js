import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { ParameterTag } from '../views/data/ParameterTag';

export default function SearchBar() {
  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={ParameterTag}
        getOptionLabel={(option) => option.name}
        defaultValue={[ParameterTag[0]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-outlined"
        options={ParameterTag}
        getOptionLabel={(option) => option.name}
        defaultValue={[ParameterTag[0]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-filled"
        options={ParameterTag.map((option) => option.name)}
        defaultValue={[ParameterTag[0].name]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip variant="outlined" label={option} key={key} {...tagProps} />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="freeSolo"
            placeholder="Favorites"
          />
        )}
      />
      <Autocomplete
        multiple
        id="tags-readOnly"
        options={ParameterTag.map((option) => option.name)}
        defaultValue={[ParameterTag[1].name, ParameterTag[3].name]}
        readOnly
        renderInput={(params) => (
          <TextField {...params} label="readOnly" placeholder="Favorites" />
        )}
      />
    </Stack>
  );
}
  