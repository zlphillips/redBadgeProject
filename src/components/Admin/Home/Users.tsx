import React, {Component, useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

  
 
const AdminUser = (props: any ) => {
        const [adminUser, setAdminUser] = useState([] as any)

    const fetchAdmin = () => {

        const url = 'http://localhost:3002/redBadge/user/all'
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token,
            }
        })
            .then(data => data.json())
            .then(data => setAdminUser(data))
            .catch(err => console.warn(err))
            
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
         fetchAdmin()
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>User Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {adminUser.map((users:  any) => (
                        <TableRow key={users}>
                        <TableCell component="th" scope="row">
                            {users.firstName}
                        </TableCell>
                        <TableCell align="right">{users.lastName}</TableCell>
                        <TableCell align="right">{users.username}</TableCell>
                        {/* <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell> */}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    )


}

export default AdminUser;