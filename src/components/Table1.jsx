import {Table,TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Table1 = () => {
    var [names,setname]=useState(["abc","efg","hjk"])
  return (
    <div style={{padding:'2px',margin:'80px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell >name</TableCell>
                        <TableCell> age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        names.map((value,index)=>{
                        return(
                            <TableRow>
                             <TableCell>{value}</TableCell>
                             </TableRow>
                        )
                    })
                }
                </TableBody>
            </Table>
         </TableContainer>
    </div>
  );
};

export default Table1