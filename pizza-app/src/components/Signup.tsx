import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';

export default function Signup() {
    const navigate = useNavigate();
  const [config, setConfig] = useState({
    name: '',
    email: '',
    profession: '',
    password: '',
    confirmpassword: '',
  });


  const paperStyle = {
    padding: 20,
    height: '75vh',
    width: 390,
    backgroundColor:"#F0F0F0"
  };

  return (
    <>
      <Box
        className='sec'
        sx={{
          width: '400px',
          position: 'absolute',
          left: '30%',
          top: '15%',
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <div className='signup-form'>
            <Typography variant='h5' sx={{ mt: -2, ml: 17 }} component='h2'>
              Sign up
            </Typography>
            <form className='register-form' id='register-form'>
              <div className='form-group'>
                <Box
                  component='form'
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '43ch' },
                  }}
                  autoComplete='off'
                >
                  <TextField
                    required
                    id='outlined-basic'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, name: e.target.value }))
                    }
                    label='Name'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Box>
              </div>
              <div className='form-group'>
                <Box
                  component='form'
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '43ch' },
                  }}
                  autoComplete='off'
                >
                  <TextField
                    required
                    id='outlined-basic'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, email: e.target.value }))
                    }
                    label='Email'
                    type='email'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Box>
              </div>
              <div className='form-group'>
                <Box
                  component='form'
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '43ch' },
                  }}
                  autoComplete='off'
                >
                  <TextField
                    required
                    id='outlined-basic'
                    onChange={(e) =>
                      setConfig((pv) => ({
                        ...pv,
                        profession: e.target.value,
                      }))
                    }
                    label='Profession'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Box>
              </div>
              <div className='form-group'>
                <Box
                  component='form'
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '43ch' },
                  }}
                >
                  <TextField
                    required
                    id='standard-password-input'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, password: e.target.value }))
                    }
                    type='password'
                    label='Password'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Box>
              </div>
              <div className='form-group'>
                <Box
                  component='form'
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '43ch' },
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    required
                    id='outlined-basic'
                    type='password'
                    onChange={(e) =>
                      setConfig((pv) => ({
                        ...pv,
                        confirmpassword: e.target.value,
                      }))
                    }
                    label='Confirm Password'
                    autoComplete='off'
                    variant='outlined'
                  />
                </Box>
              </div>
              <div>
                <Button
                  variant='contained'
                //   onClick={signup}
                  sx={{
                    ml: 17,
                    mt: 0.5,
                  }}
                >
                  Signup
                </Button>
                <div className='container signin'>
                  <p style={{"marginTop":20}}>
                    Already have an account?{' '}
                    <a href='#' 
                     onClick={() => navigate("/login")}
                    >
                      Login
                    </a>
                    .
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Paper>
      </Box>
    </>
  );
}


