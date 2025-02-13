import { styled } from '@mui/material/styles';

export const StyledImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  border: 'none',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});