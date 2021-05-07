import React from "react";

function TableHead(props) {

    return (
        <thead >
            <tr className="bg-white" >
                <td className="ms-2 p-2"></td>
                <td className="ms-2 p-2">Name: <i class="fas fa-sort cursor" onClick={props.sortByFirstName}></i>
                </td>
                <td className="ms-2 p-2">Email:</td>
                <td className="ms-2 p-2">Phone:</td>
            </tr>
        </thead >
    )
}

export default TableHead;