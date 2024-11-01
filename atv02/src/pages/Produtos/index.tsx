import { useState, useEffect, Component } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';

import { CardPaper } from '../../components/customMUI';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ptBR } from '@mui/x-data-grid/locales';

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'nome',
      headerName: 'Nome',
      width: 250,
      editable: true,
    },
    {
      field: 'descricao',
      headerName: 'Descrição',
      width: 350,
      editable: true,
    },
    {
      field: 'preco',
      headerName: 'Preço',
      type: 'number',
      width: 110,
      editable: true,
    }
];
  
const rows = [
    { id: 1, nome: 'Ração Golden', descricao: 'Ração para filhotes da marca Golden', preco: 24.55 },
    { id: 2, nome: 'Ração Golden', descricao: 'Ração para filhotes da marca Golden', preco: 24.55 },
    { id: 3, nome: 'Ração Golden', descricao: 'Ração para filhotes da marca Golden', preco: 24.55 },
    { id: 4, nome: 'Ração Golden', descricao: 'Ração para filhotes da marca Golden', preco: 24.55 },
    { id: 5, nome: 'Ração Golden', descricao: 'Ração para filhotes da marca Golden', preco: 24.55 },
    { id: 6, nome: 'Ração Golden', descricao: 'Ração para filhotes da marca Golden', preco: 24.55 },
    { id: 7, nome: 'Ração Golden', descricao: 'Ração para filhotes da marca Golden', preco: 24.55 }

];


  
export default class Produtos extends Component{
    render() {
        return (
            <main className='produtos'>
                <h1 className='page-title'>Produtos</h1>

                <CardPaper className='cardp-table'>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                        pagination: {
                            paginationModel: {
                            pageSize: 5,
                            },
                        },
                        }}
                        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        sx={{
                            border: 'none',
                            width: '100%',
                            maxWidth: '100%'
                        }}
                    />
                </CardPaper>
            </main>
        )
    }
}
