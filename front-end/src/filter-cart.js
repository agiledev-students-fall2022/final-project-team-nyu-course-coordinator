import React, {useState} from 'react'
// import { useTable, useSortBy } from 'react-table'

function FilterCart(){
    const [filters, setFilters] = useState(['SETUP', 'LEARN']);

    const handleFilter = (filter) => {
        filters.includes(filter)
        ? setFilters(filters.filter((value) => value !== filter))
        : setFilters(filters.concat(filter));
    };
}