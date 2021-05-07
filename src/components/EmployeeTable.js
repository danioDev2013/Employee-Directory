import React from "react";


function EmployeeList(props) {
    console.log(props.results)
    console.log('Search', props.filter)



    return (
        <tbody>
            {props.results.filter(input => input.name.first.toLowerCase().includes(props.filter)).map(item => (
                < tr key={item.login.uuid} >
                    <td className="p-4"><img src={item.picture.medium} className="circle" /></td>
                    <td className="px-4">{item.name.first} {item.name.last}</td>
                    <td className="px-4"><b>Email:</b> {item.email}</td>
                    <td className="px-4"><b>Phone:</b>{item.phone}</td>
                </tr >
            ))
            }
        </tbody >

    )
}

export default EmployeeList;