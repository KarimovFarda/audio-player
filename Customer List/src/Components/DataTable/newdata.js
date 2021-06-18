import React, { useEffect, useState} from 'react';
import { Link} from "react-router-dom";

var amount = 0;
const Pagination = ({totalPageCount,handlePageChange,currentPage}) => {
    return (<nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center mb-0">
        <li className="page-item"><button onClick={() => handlePageChange(
            Math.max(currentPage - 1,1)
        )}    className="page-link font-weight-bold text-dark">Previous</button></li>
        {[...Array(totalPageCount).keys()].map(num => (<li className={`page-item ${num+ 1 === currentPage && 'active'}`} key={num}><button onClick={() => handlePageChange(num + 1)} className="page-link font-weight-bold text-dark" href="/">{num + 1}</button></li>
))}
<li className="page-item"><button onClick={() => handlePageChange(
            Math.min(currentPage + 1,totalPageCount)
        )}   className="page-link font-weight-bold text-dark">Next</button></li>    </ul>
</nav>)
}
export default function NewData({records,headers}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(25);
    const [totalPageCount,SetTotalPageCount] = useState(0);
    const [query,setQuery] = useState('');
    const [sortField,setSortField] = useState(null);
    const [sortOrder,setSortOrder] = useState("asc");
    const handleItemsperPage = (evt) => {
        setItemsPerPage(parseInt(evt.target.value));
        setCurrentPage(1)
    }
    const handleDataSort = (head) => {
        if(head.sortable){
            console.log("Sorting Magic",head);
            setSortField(head.id)
            setSortOrder(sortField === 'asc' ? "desc" : "asc")
        }
    }
    const computedRecords = (() => {
        let computed = records;
        computed = computed.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) *  itemsPerPage + itemsPerPage)
        if(query){   
            computed = computed.filter((item) => item.name.first.toLowerCase().includes(query.toLowerCase()) || item.name.last.toLowerCase().includes(query.toLowerCase()) ||  `${item.name.first} ${item.name.last}`.toLowerCase().includes(query.toLowerCase()) ) }
        if(sortField){  
            computed = computed.sort((x,y) =>{
                const compared = x[sortField].localeCompare(y[sortField]);
                let isReversed = sortOrder === "asc" ? 1 : -1;
                return compared * isReversed;
            }
            )}
            return computed
    })();
    useEffect(() => {
        if (records.length){
            const recordsLength = query.length ? true : records.length;
            let totalCount = Math.ceil(recordsLength / itemsPerPage);
            SetTotalPageCount(totalCount)
        }
    });
    amount = 0;
    var arr = []
 console.log(arr.length)
    return (
        <div className="container">
        <ul class="nav justify-content-end">
  <li class="nav-item">
     <a class="nav-link text-info font-weight-bold" id={'delete'} onClick={() => {localStorage.removeItem(localStorage.length);window.location.reload()}}  href="#">DELETE USER</a> 
  </li>
  <li class="nav-item">
      <a class="nav-link text-success font-weight-bold" href="/form">ADD USER</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-danger font-weight-bold" href="/">LOG OUT</a>
  </li>
</ul>
            <h2 className="my-4 font-weight-bold"> Customers' List</h2>
        <div className="card">
        <div className="card-header bg-dark">
            <div className="row">
                <div className="col-8">
                    <div  className="input-group">
                        <input value={query} onChange={evt => setQuery(evt.target.value)} type="text" className="form-control " placeholder="Search customer..." aria-label="Search query" aria-describedby="button-addon2" />
                        <button className="btn btn-warning font-weight-bold" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-7 pt-1 px-3 text-light" style={{cursor:"pointer"}}> Amount of customers </div>
                        <div className="col-5">
                            <select onChange={handleItemsperPage} value={itemsPerPage} className="form-select px-3 py-1 bg-warning border-none font-weight-bold" name="itemsPerPage" id="itemsPerPage">
                                <option className={'font-weight-bold'} style={{cursor:"pointer"}} value="5">5</option>
                                <option className={'font-weight-bold'} style={{cursor:"pointer"}} value="10">10</option>
                                <option className={'font-weight-bold'} style={{cursor:"pointer"}} value="20">20</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{padding:0.5 + "rem"}} className="card-body">
            <table className="table" style={{overflow:"hidden"}}>
                <thead>
                    <tr style={{cursor:'pointer'}} className="bg-dark text-light text-center align-items-center">
                        {headers.map(head => 
                        ( <th style={{padding:0.5 + "rem"}} className={`${head.sortable && 'bg-warning && text-dark'} bg-warning text-dark`} onClick={() => handleDataSort(head)}  style={{cursor:'pointer'}}key={head.id} scope="col">
                            {head.label}
                        </th>
                        ))}
                    </tr>
                </thead>
                <tbody id="table">
                     {Object.entries(localStorage).map((item,index) => (
                <tr className={'bg-light'} >
                      <th  style={{fontSize : 1 + "rem"}} scope="row">{index + 1}</th>
                      <td  style={{fontSize : 1 + "rem"}} className="font-weight-bold text-dark">{(item[1].split(",")[0])}</td>                      
                          <td style={{fontSize : 1 + "rem"}} className="font-weight-bold text-dark"> {(item[1].split(",")[1])}</td>
                          <td  style={{fontSize : 1 + "rem"}}className="font-weight-bold  text-dark">{(item[1].split(",")[2])}</td>
                          <td style={{fontSize : 1 + "rem"}} className="font-weight-bold text-dark">{(item[1].split(",")[3])}</td>
                          <td style={{fontSize : 1 + "rem"}} className="font-weight-bold text-dark">{(item[1].split(",")[5])}</td>
                          <td style={{fontSize : 1 + "rem"}} className="font-weight-bold text-dark ">{(item[1].split(",")[4])}</td>
                          <td style={{fontSize : 1 + "rem"}}><Link to={'/data/'} className="btn btn-warning font-weight-bold text-dark"> Details</Link></td>
                          <td style={{fontSize : 1 + "rem"}}><Link to={'/edit/' + index} className="btn btn-warning font-weight-bold px-3 text-dark"> Edit</Link></td>
                    </tr>
                     ))}       
                </tbody>
            </table>
        </div>
        <div className="card-footer">
            <div className="row">
                <div className="col-12 ">
                   <Pagination
                   totalPageCount={totalPageCount}
                 handlePageChange={setCurrentPage}
                 currentPage={currentPage}
                 />
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}



