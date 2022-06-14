import MaterialTable from '@material-table/core'
import React from 'react'

interface Data {
  name: string;
  age: number;
  price: number;
}

function createData(
  name: string,
  age: number,
  price: number,
): Data {
  return {
    name,
    age,
    price
  };
}

const rows = [
  createData('Cupcake',  43, 400),
  createData('Donut', 49, 90),
  createData('Eclair', 60, 62),
  createData('Frozen', 14, 90),
  createData('Gingerbread', 33, 80),
  createData('Honeycomb', 40, 62),
  createData('Ice', 24, 120),
  createData('Jelly', 35, 30),
  createData('KitKat', 51, 40),
  createData('Lollipop', 30, 10),
  createData('Marshmallow', 80, 40),
  createData('Nougat', 36, 100),
  createData('Oreo', 37, 90),
];

const GenerTable = () => {
  return (
    <MaterialTable
      title="Material Table"
      data={rows}
      columns={[
        {
          title: 'Name', 
          field: 'name',
        },
        {
          title: 'Age',
          field: 'age',
          hidden: true
        },
        {
          title: 'Price',
          field: 'price',
        }
      ]}
      options={{
        // search預設是打開的
        search: false,
        padding: 'normal',
        // filtering: true,
        columnsButton: true,
      }}
    />
  )
}

export default GenerTable