import React from 'react'
import { ThemeProvider } from '@emotion/react';
import FullLayout from '@/src/layouts/FullLayout';
import theme from '@/src/theme/theme';
import { Grid } from "@mui/material";
import Allproducts from './add';
// import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";

const allorders = () => {
    return (
    
        <ThemeProvider theme={theme}>
          <style jsx global>{`
        footer {
          display:none;
        }
      `}</style>
          <FullLayout>
          <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <Allproducts />
      </Grid>
    </Grid>
        </FullLayout>
       </ThemeProvider>
       
      );
}

export default allorders