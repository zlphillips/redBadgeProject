import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import APIURL from '../../helpers/environment';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));





const DeleteProfile = (props: any) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = () => {
        console.log(props.id)
          fetch(`${APIURL}/redBadge/profile/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : props.token
            }
        
      }).then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
      props.fetchAll()
    }



   
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Delete your profile?</h2>
            <p id="simple-modal-description">
                Are you sure you want to delete your profile ?
                This action is not reversible.
          </p>
          <DeleteForeverIcon onClick={handleDelete}/>
        </div>
    );
                 


    return (
        <div className="div">
            <div>
            <p onClick={handleOpen} style={{marginBottom: '-3px'}}> Delete Profile </p>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}

                </Modal>
            </div>
        </div>
    )
}
export default DeleteProfile;