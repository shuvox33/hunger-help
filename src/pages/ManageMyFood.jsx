import { NavLink, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useTable } from 'react-table';
import * as React from "react";
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'



const ManageMyFood = () => {
    React.useEffect(()=>{
        document.title = "Hunger-Help | Manage MyFoods"
    },[])

    const { user } = useAuth();
    const allFoods = useLoaderData();
    const userAddedFoods = allFoods.filter(food => food.donatorEMail === user.email);
    const [userSelectedFoods, setUserSelectedFoods] = React.useState(userAddedFoods)



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a11-hunger-help-server.vercel.app/foods/${id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingFoods = userSelectedFoods.filter(food => food._id != id);
                            setUserSelectedFoods(remainingFoods);
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const data = React.useMemo(() => userSelectedFoods, [userSelectedFoods]);

    const columns = React.useMemo(() => [
        {
            Header: "Food Id",
            accessor: "_id",
        },
        {
            Header: "Food Name",
            accessor: "foodName",
        },
        {
            Header: "Actions",
            Cell: ({ row }) => (
                <div className="flex gap-3">
                    <NavLink to={`update/${row.original._id}`}>
                        <button className="btn btn-primary btn-sm">Update</button>
                    </NavLink>
                    <button onClick={() => handleDelete(row.original._id)} className="btn btn-primary btn-sm">Delete</button>
                    <NavLink to={`manage/${row.original._id}`}>
                        <button className="btn btn-primary btn-sm">Manage</button>
                    </NavLink>
                </div>
            ),
        },
    ], []);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroups, index) => (
                        <tr key={index} {...headerGroups.getHeaderGroupProps()}>
                            {
                                headerGroups.headers.map((column, i) => (
                                    <th key={i}{...column.getHeaderProps()} style={{
                                        borderBottom: "solid 3px red",
                                        background: "aliceblue",
                                        color: "black",
                                        fontWeight: "bold",
                                    }}>
                                        {
                                            column.render("Header")
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr key={i} {...row.getRowProps()}>
                                {row.cells.map((cell, i) => (
                                    <td style={{
                                        padding: "10px",
                                        border: "solid 1px gray",
                                        background: "papayawhip",
                                    }} key={i} {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

ManageMyFood.propTypes = {
    row: PropTypes.node
};

export default ManageMyFood;