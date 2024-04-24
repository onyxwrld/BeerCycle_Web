import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Basket } from '../../Interfaces/Basket';

/**
 * A Page_4 componens a foglaláshoz tartozó form negyeddik oldala.
 * Ez a komponens fetcheli a kosár tartalmát amit a felasználó már össze válogatott a foglalás megkezdése során.
 * A Material ui DataGrid kompenensét használva képes a Page_4 megjelniteni a kosár tartalámt oszloposan [nevét,árát]
 */
const columns = [
  { field: 'name', headerName: 'Termék neve', width: 150 },
  { field: 'type', headerName: 'Tipus', width: 150 },
  { field: 'price', headerName: 'Ár', width: 110 },
];

export default function Step_4() {
  const [menuData, setMenuData] = useState<Menu[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      if (token != null) {
        try {
          const response = await fetch('http://localhost:3000/basket', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          const baskets: Basket[] = await response.json();
          const menus = baskets.flatMap(basket => basket.menu.map(menuItem => ({
            ...menuItem
          })));
          setMenuData(menus);

        } catch (error) {
          console.error('Error fetching basket data:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <Box className='mt-20'>
      <DataGrid
        className='bg-orange-200'
        rows={menuData}
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
      />
    </Box>
  );
}
