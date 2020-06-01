import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import api from '../services/api'


export default function SegundaTela() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUF] = useState('');
  const [descricao_conhece_mamae_papai, setDescMaePai] = useState('');
  const [msg_erick, setMsgErick] = useState('');
  

  async function handleRegisterEmail(e){
    e.preventDefault();

    //const verifyEmail = {email}

   // const response = await api.post('verificaEmail', verifyEmail)

  //  alert(response.data.Mensagem)
    
    
    handleClose();
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
            value = {nome} onChange={e => setNome(e.target.value)}
            autoFocus
            margin="dense"
            id="nome"
            label="Nome"
            type="text"
            fullWidth
          />

            <TextField 
            value = {telefone} onChange={e => setTelefone(e.target.value)}
            autoFocus
            margin="dense"
            id="telefone"
            label="Telefone"
            type="text"
            fullWidth
          />

            <TextField 
            value = {localidade} onChange={e => setLocalidade(e.target.value)}
            autoFocus
            margin="dense"
            id="localidade"
            label="Cidade"
            type="text"
            fullWidth
          />
          <TextField 
            value = {logradouro} onChange={e => setLogradouro(e.target.value)}
            autoFocus
            margin="dense"
            id="logradouro"
            label="Endereço"
            type="text"
            fullWidth
          />

            <TextField 
            value = {complemento} onChange={e => setComplemento(e.target.value)}
            autoFocus
            margin="dense"
            id="complemento"
            label="Complemento"
            type="text"
            fullWidth
          />
          <TextField 
            value = {uf} onChange={e => setUF(e.target.value)}
            autoFocus
            margin="dense"
            id="uf"
            label="UF"
            type="text"
            fullWidth
          />

            <TextField 
            value = {descricao_conhece_mamae_papai} onChange={e => setDescMaePai(e.target.value)}
            autoFocus
            margin="dense"
            id="descMaePai"
            label="De onde conhece a Mamãe e o Papai do Erick?"
            type="text"
            fullWidth
          />
          <TextField 
            value = {msg_erick} onChange={e => setMsgErick(e.target.value)}
            autoFocus
            margin="dense"
            id="msg_erick"
            label="Quer deixar uma mensagem para mim?"
            type="text"
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

