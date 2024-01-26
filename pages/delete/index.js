
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    // console.log('deleted');
    // router.push('/dashboard');
    setOpen(false);
    // toastNotification();
    // setTimeout(() => {
    //     setOpen(false);
    //   }, "3200")
  };

//   const toastNotification = () =>{
//     toast.success("Message Submitted!", {
//         position: "top-center",
//         autoClose: 2500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       })
//   }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Button onClick={() => handleClickOpen()} variant="contained" sx={{backgroundColor:"#8C7CF0" , color:"white !important", "&:hover": {
      backgroundColor: "#b1a6f3 "
    }}} >
        Delete Account
      </Button>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Delete Account Forever?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You won't be able to recover this account.
              <br />
              Account will be deleted in 15 Days
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Dismiss</Button>
            <Button onClick={handleDelete} autoFocus>
            {/* <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              /> */}
              DELETE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default index;
