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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// function onsubmit(){

// }
const API_URL = 'api/addproducts';
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
  
        if (response.ok) {
          console.log('Data submitted successfully!');
          toast.success('Product added successfully!', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        } else {
          console.error('Error submitting data:', response.statusText);
          toast.error("Error adding product!", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      } catch (error) {
        console.error('Error submitting data:', error);
        toast.error("Error adding product!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      
  }
    return (
      
    
        <ThemeProvider theme={theme}>
             <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
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