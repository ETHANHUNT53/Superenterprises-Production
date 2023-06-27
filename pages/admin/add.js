import React, { useState } from 'react'
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
const API_URL = 'http://localhost:3000/api/addproducts';
const Allproducts = () => {

  const [form,setForm] = useState({})
  const onChange = (e)=>{
      setForm({
        ...form,
        [e.target.name] : e.target.value 
      })
      
  }

  const submitForm = async(e)=>{
      e.preventDefault();
      console.log(form);
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([form]),
        });
        console.log(response);
  
        if (response.ok) {
          console.log('Data submitted successfully!');
        } else {
          console.error('Error submitting data:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting data:', error);
      }
      
  }
    return (
    
        <ThemeProvider theme={theme}>
          <style jsx global>{`
          footer {
            display: none;
          }
          `}</style>
          <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="Add a Product">
          <Stack spacing={3}>
            <TextField
              name="title"
              label="Title"
              variant="outlined"
               value={form.title? form.title:""} onChange={onChange}
            />
            <TextField onChange={onChange} value={form.slug?form.slug:""} name="slug" label="Slug" variant="outlined" />
            <TextField
              name="desc"
              label="Description"
              value={form.desc?form.desc:""}
              multiline
              rows={4} onChange={onChange}
            />
            <TextField onChange={onChange} value={form.img? form.img:""} name="img" label="Image url" variant="outlined" />
            <TextField onChange={onChange} value={form.category? form.category:""} name="category" label="Category" variant="outlined" />
            <TextField onChange={onChange} value={form.size? form.size:""} name="size" label="Size" variant="outlined" />
            <TextField onChange={onChange} value={form.color?form.color:""} name="color" label="Color" variant="outlined" />
            <TextField onChange={onChange} value={form.price?form.price:""} name="price" label="Price" variant="outlined" />
            <TextField onChange={onChange} value={form.availableQty?form.availableQty:""} name="availableQty" label="Quantity" variant="outlined" />
           
           
            
            
          </Stack>
          <br />
          <Button onClick={submitForm} variant="outlined" mt={2} >
            Submit
          </Button>
        </BaseCard>
      </Grid>

      
    </Grid>
  
        </FullLayout>
       </ThemeProvider>
       
      );
}

export default Allproducts