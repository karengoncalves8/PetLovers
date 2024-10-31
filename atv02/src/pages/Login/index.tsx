import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

import logo from '../../assets/logo/logo.svg'

import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import { BlueButton, CardPaper } from '../../components/customMUI';


function Login() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const [error, setError] = useState(false)
    const [helperText, setHelperText] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
      };
    
      const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
      }

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const navigate = useNavigate()

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
        setError(false)
        setHelperText('') 
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError(true);
            setHelperText('Por favor, insira um e-mail válido.')
        } else {
            setError(false)
            setHelperText('')
            navigate('/Produtos')
        }
    }

    return (
        <main className='login'>
            
            <CardPaper elevation={3} square={false} className='cardp-login' >
                <div className="logo">
                    <img src={logo} className='logo-img'></img>
                    <h2 className='logo-name'>PetLovers</h2>
                </div>

                <div className="login-subtitle">
                    <span className='subtitle'>LOGIN</span>
                    <span className='text-low-opacity'>Insira suas credenciais para acessar a aplicação</span>
                </div>

                <form className="login" onSubmit={handleSubmit}>
                <FormControl variant="outlined" fullWidth error={error}>
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        error={error} 
                    />
                    <FormHelperText>{helperText}</FormHelperText>
                </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? 'esconder senha' : 'mostrar senha'}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Senha"
                        />
                    </FormControl>

                    <BlueButton variant="contained" className='large-btn btn-azul' type='submit'>LOGIN</BlueButton>
                </form>

            </CardPaper>
        </main>
    )
}


export default Login