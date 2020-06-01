import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SegundaTela from './segundaTela'





import api from '../services/api'


export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const [email, setEmail] = useState('');
  

  async function handleRegisterEmail(e){
    e.preventDefault();

    const verifyEmail = {email}

    
        const response = await api.post('verificaEmail', verifyEmail).then(response => {

            

            console.log(response)
            if(response.status === 200){

                return response
            }

        })
        return response
    
  }
  

  return (
      
    <div>
        <h1>Chá rifa do Erick</h1>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Iniciar Cadastro
      </Button>
      
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cadastro</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para participar da rifa, é só se cadastrar nesse formulário e, ao final, você receberá por e-mail a conta para fazer a transferência/depósito!<br/><br/>

            1 super-herói = R$30,00 (equivale a um pacote de fraldas)<br/>
            2 super-heróis = R$50,00 (equivale a um pacote de fraldas + 1 mimo)<br/><br/>

            Assim que efetuar o pagamento da rifa, envie o comprovante para o e-mail karinagil18@gmail.com ou para o Whatsapp (62) 99945-0256 e você receberá a lista atualizada com os nomes dos super-heróis para escolher.<br/><br/>

            Após a escolha do super-herói, você receberá a confirmação de que está participando da rifa, por meio de um voucher.

            Boa sorte e que vença o melhor super-herói!!! :D
          </DialogContentText>
         

          <TextField 
            value = {email} onChange={e => setEmail(e.target.value)}
            autoFocus
            margin="dense"
            id="email"
            label="Seu e-mail"
            type="email"
            fullWidth
          />
          

         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button  onClick={handleRegisterEmail} color="primary">
            Próximo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
  
}

