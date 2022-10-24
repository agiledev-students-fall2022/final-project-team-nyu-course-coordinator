import React, {useMemo}  from 'react'
import { useTable, useFilters } from 'react-table'

function FilterCart(props){
    // const data = useMemo(() => props.data, [props.data]);
    const data= useMemo(
        ()=> [
            { 
                score:0.9063306, show:{"id":62693,"url":"https://www.tvmaze.com/shows/62693/snow","name":"Snow","type":"Scripted","language":"English","genres":[],"status":"In Development","runtime":null,"averageRuntime":null,"premiered":null,"ended":null,"officialSite":null,"schedule":{"time":"","days":[]},"rating":{"average":null},"weight":88,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"},"officialSite":"https://www.hbo.com/"},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":null,"summary":"<p>A <i>Game of Thrones</i> sequel centered on Jon Snow.</p>","updated":1656207401,"_links":{"self":{"href":"https://api.tvmaze.com/shows/62693"}}}},{"score":0.86460876,"show":{"id":10412,"url":"https://www.tvmaze.com/shows/10412/snow","name":"Snow","type":"Scripted","language":"English","genres":["Comedy","Family","Fantasy"],"status":"Ended","runtime":120,"averageRuntime":120,"premiered":"2004-12-13","ended":"2008-12-14","officialSite":"http://abcfamily.go.com/movies/listing/snow","schedule":{"time":"20:00","days":["Sunday"]},"rating":{"average":null},"weight":39,"network":{"id":26,"name":"FreeForm","country":{"name":"United States","code":"US","timezone":"America/New_York"},"officialSite":"https://www.freeform.com/"},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":null,"thetvdb":null,"imdb":"tt0425468"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/35/88041.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/35/88041.jpg"},"summary":"<p><b>Snow</b> is an American Christmas-themed film starring Tom Cavanagh and Ashley Williams that premiered in 2004 on the ABC television network, and was also shown on the ABC Family cable network later the same year. It was written by Rich Burns and directed by Alex Zamm. Since 2004, Snow has become a staple on ABC Family's annual 25 Days of Christmas programming block. The sequel, <i>Snow 2: Brain Freeze</i>, was released on December 14, 2008 as part of ABC Family's 25 Days of Christmas. The main cast from the first film reprise their roles in the sequel.</p>","updated":1503125327,"_links":{"self":{"href":"https://api.tvmaze.com/shows/10412"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/537594"}}}},{"score":0.6930334,"show":{"id":63510,"url":"https://www.tvmaze.com/shows/63510/black-snow","name":"Black Snow","type":"Scripted","language":"English","genres":["Drama","Crime","Mystery"],"status":"In Development","runtime":60,"averageRuntime":null,"premiered":null,"ended":null,"officialSite":null,"schedule":{"time":"","days":[]},"rating":{"average":null},"weight":74,"network":null,"webChannel":{"id":64,"name":"Stan","country":{"name":"Australia","code":"AU","timezone":"Australia/Sydney"},"officialSite":"https://www.stan.com.au/"},"dvdCountry":null,"externals":{"tvrage":null,"thetvdb":null,"imdb":null},"image":null,"summary":"<p>In 1994, seventeen-year-old Jasmine Baker was murdered. The crime shocked the small town of Ashford and devastated Jasmine's Australian South Sea Islander community. The case was never solved, the killer never found. But in 2019, the opening of a time capsule unearths a secret that puts cold-case Detective James Cormack on the trail of the killer.</p>","updated":1660297148,"_links":{"self":{"href":"https://api.tvmaze.com/shows/63510"}}}},{"score":0.65434605,"show":{"id":36806,"url":"https://www.tvmaze.com/shows/36806/snow-queen","name":"Snow Queen","type":"Scripted","language":"English","genres":["Adventure","Family","Fantasy"],"status":"Ended","runtime":90,"averageRuntime":90,"premiered":"2002-12-07","ended":"2002-12-08","officialSite":null,"schedule":{"time":"","days":["Saturday","Sunday"]},"rating":{"average":null},"weight":37,"network":{"id":50,"name":"Hallmark Channel","country":{"name":"United States","code":"US","timezone":"America/New_York"},"officialSite":null},"webChannel":null,"dvdCountry":null,"externals":{"tvrage":null,"thetvdb":96281,"imdb":"tt0210294"},"image":{"medium":"https://static.tvmaze.com/uploads/images/medium_portrait/222/556017.jpg","original":"https://static.tvmaze.com/uploads/images/original_untouched/222/556017.jpg"},"summary":"<p>A young woman must journey through the seasons to rescue her boyfriend who has been kidnapped by the evil Snow Queen.</p>","updated":1639353441,"_links":{"self":{"href":"https://api.tvmaze.com/shows/36806"},"previousepisode":{"href":"https://api.tvmaze.com/episodes/1470517"}}}
            }
        ],[]
    )

    // const columns = useMemo(() => props.columns, [props.columns]);
    const columns = useMemo(
        () => [
          {
            // first group - TV Show
            Header: "TV Show",
            // First group columns
            columns: [
              {
                Header: "Name",
                accessor: "show.name",
                Filter: ColumnFilter
              },
              {
                Header: "Type",
                accessor: "show.type",
                Filter: ColumnFilter
              }
            ]
          },
          {
            // Second group - Details
            Header: "Details",
            // Second group columns
            columns: [
              {
                Header: "Language",
                accessor: "show.language",
                Filter: ColumnFilter
              },
              {
                Header: "Genre(s)",
                accessor: "show.genres",
                Filter: ColumnFilter
              },
              {
                Header: "Runtime",
                accessor: "show.runtime",
                Filter: ColumnFilter
              },
              {
                Header: "Status",
                accessor: "show.status",
                Filter: ColumnFilter
              }
            ]
          }
        ],
        []
      );

    const ColumnFilter= ({column})=>{
        const {filterValue, setFilter} =column
        return (
            <span>
                Search:{' '}
                <input
                    value={filterValue || ""}
                    onChange={(e)=> setFilter(e.target.value)}
                />
            </span>
        )
    }


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = useTable(
        {
          columns,
          data
        },
        useFilters
      )


    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                        <span>
                        {column.canFilter ? column.render("Filter") : null}
                        </span>
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}


export default FilterCart