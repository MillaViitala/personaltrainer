import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Moment from 'react-moment'

export default function Trainings() {
    const [trainings, setTrainings] = useState([]);
    
    useEffect(() => fetchData() , []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch (err => console.error(err))
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date',
            Cell: row => <Moment format="DD/MM/YYYY">{row.date}</Moment>
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },

        {
            Header: 'Firstname',
            accessor: 'customer.firstname'
        },

        {
            Header: 'Lastname',
            accessor: 'customer.lastname'
        },
    ]

    return(
        <div>
            <ReactTable filterable={true} sortable={true} data={trainings} columns={columns} />

        </div>
    );
}
