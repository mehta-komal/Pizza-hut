import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';


interface SigninConfig {
  name: string;
  email: string;
  password: string;
}

export default function Signin() {
    const navigate = useNavigate();
 
  const [config, setConfig] = useState<SigninConfig>({
    name: '',
    email: '',
    password: '',
  });




//   const signup = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     history.push('/register');
//   };

  const paperStyle = {
    padding: 20,
    height: '60vh',
    width: 390,
    margin: '8% auto',
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
          top: '20%',
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <div className='signin-form'>
            <Typography variant='h5' sx={{ mt: 2, ml: 17 }} component='h2'>
              Sign in
            </Typography>
            <form className='register-form' id='register-form'>
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
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, name: e.target.value }))
                    }
                    label='Name'
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
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, email: e.target.value }))
                    }
                    label='Email'
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
                >
                  <TextField
                    required
                    id='outlined-basic'
                    onChange={(e) =>
                      setConfig((pv) => ({ ...pv, password: e.target.value }))
                    }
                    label='Password'
                    type='password'
                    variant='outlined'
                  />
                </Box>
              </div>

              <div>
                <Button
                  variant='contained'
                //   onClick={signin}
                  sx={{
                    ml: 17,
                    mt: 3,
                  }}
                
                >
                  Sign in
                </Button>
              </div>
              <div className='container signin'>
                <p style={{"marginTop":20}}>
                  Don't have an account?{' '}
                  <a href='#'
                onClick={() => navigate("/signup")}
                >
                   SignUp
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </Paper>
      </Box>
    </>
  );
}
