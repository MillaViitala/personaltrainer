import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';
import Button from '@material-ui/core/Button';

export default function Customerlist() {


    const [customers, setCustomers] = useState([]);
    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
    }

    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        }
    }

    const saveCustomer = (customer) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const updateCustomer = (customer, link) => {
        fetch(link,   {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
     })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const saveTraining = (training, link) => {
        console.log(link);
        fetch('https://customerrest.herokuapp.com/api/trainings', {
          method : 'POST',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(training)
        })
  
  
        .then(res => fetchData())
        .catch(err => console.error(err))
      
        alert("New training added!");
  
      }

    const columns = [

        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last name',
            accessor: 'lastname'
        },
        {
            Header: 'Street Address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <EditCustomer updateCustomer={updateCustomer} customer={row.original}/>
        },
        {
            sortable: false,
            filterable: false,
            width: 150,
            accessor: "links[0].href",
    
           Cell: row => <AddTraining training={row.original}  saveTraining={saveTraining} />
                                  
                               
          },      
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button color="secondary" size="small" onClick={() => deleteCustomer(row.value)}>Delete</Button>
        }


    ]


    return(
        <div>

            <AddCustomer saveCustomer={saveCustomer} />
            <ReactTable filterable={true} sortable={true} data={customers} columns={columns} />
        </div>
    );
}