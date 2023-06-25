import React from 'react'
import { ThemeProvider } from '@emotion/react';
import FullLayout from '@/src/layouts/FullLayout';
import theme from '@/src/theme/theme';
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";

// function onsubmit(){

// }

const add = () => {
    return (
    
        <ThemeProvider theme={theme}>
          <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add a Product">
          <Stack spacing={3}>
            <TextField
              id="title"
              label="Title"
              variant="outlined"
            />
            <TextField id="type" label="Type" variant="outlined" />
            <TextField id="size" label="Size" variant="outlined" />
            <TextField id="color" label="Color" variant="outlined" />
           
            <TextField
              id="description"
              label="Description"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
            <TextField
              error
              id="er-basic"
              label="Error"
              defaultValue="ad1avi"
              variant="outlined"
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Terms & Condition"
              />
              <FormControlLabel
                disabled
                control={<Checkbox />}
                label="Disabled"
              />
            </FormGroup>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <br />
          <Button variant="contained" mt={2} onClick={onsubmit}>
            Submit
          </Button>
        </BaseCard>
      </Grid>

      <Grid item xs={12} lg={12}>
        <BaseCard title="Form Design Type">
          <Stack spacing={3} direction="row">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </Stack>
        </BaseCard>
      </Grid>
    </Grid>
  
        </FullLayout>
       </ThemeProvider>
       
      );
}

export default add