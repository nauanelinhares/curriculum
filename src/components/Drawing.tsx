import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { StyledImage } from './styles';
import { DrawingProps } from './types';
import React from 'react';

export default function BasicCard(drawingProps: DrawingProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90vw',
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    border: 'none',
    overflow: 'auto',
    p: 2,
  };

  return (
    <Card sx={{ boxShadow: 'none', border: 'none', maxWidth: '30%' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <CardContent style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18, fontWeight: 'bold' }}>
          {drawingProps.title}
        </Typography>
        
        <StyledImage 
          src={drawingProps.image} 
          alt="image" 
          onClick={handleOpen}
          style={{ cursor: 'pointer' }}
        />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
        >
          <Box sx={modalStyle}>
            <img 
              src={drawingProps.image} 
              alt="image"
              style={{ 
                maxWidth: '100%',
                objectFit: 'contain'
              }} 
            />
          </Box>
        </Modal>
      </CardContent>
    </Card>
  );
}