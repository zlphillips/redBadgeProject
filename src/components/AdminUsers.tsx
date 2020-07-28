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
 useEffect(() => fetchAdmin())

    return (
        <div>
            <TableContainer >
                <Table aria-label="simple table" >
                    <TableHead>
                    <TableRow>
                        <TableCell>User Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {adminUser.map((users:  any) => (
                        <TableRow >
                        <TableCell  component="th" scope="row">{users.firstName}</TableCell>
                        <TableCell>{users.lastName}</TableCell>
                        <TableCell >{users.username}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    )


}

export default AdminUser;