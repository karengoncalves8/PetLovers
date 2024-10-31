import { styled } from '@mui/material/styles';

import Button, { ButtonProps } from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export const CardPaper = styled(Paper)(() => ({
    padding: 30,
    textAlign: 'center',
    borderRadius: 8,
}));
  
export const BlueButton = styled(Button)<ButtonProps>(() => ({
    color: 'white',
    backgroundColor: '#2578A1',
    '&:hover': {
        backgroundColor:'#7ABFE2',
    },
}));