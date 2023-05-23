//import react from 'react';
const UserTable =({data})=>{
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>))}
            </tbody>
            
        </table>
        </>
    );
}
export default UserTable;

// const UserTable =()=>{
//     return(
//         <>
//         <table>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>UserName</th>
//                     <th>Email</th>
//                 </tr>
//             </thead>
           
//             <tbody>
//                 <tr>
//                     <td>1</td>
//                     <td>Mareme</td>
//                     <td>Mareme Mboup</td>
//                     <td>marememboup93@gmail.com</td>
//                 </tr>
//             </tbody>
        
//         </table>
//         </>
//     );
// }
// export default UserTable;