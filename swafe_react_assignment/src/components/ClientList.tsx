import React, { useEffect, useState } from 'react';
import { User } from '../models/User';
import { useServiceContext } from '../services/ServiceContext';
import { UserService } from '../services/UserService';
type ClientListProps = {
	clients: User[] | undefined;
}

function ClientList(props: ClientListProps) {


	const {userService} = useServiceContext();
	const [users, setUsers] = useState<User[]>([]);
  
	  useEffect(() => {
		 populateData() 
	  }, [] )
  
	  async function populateData(){
		setUsers(await userService.getTrainerClients())
	  }
  



	return (
		<div className="m-2 w-2/3 overflow-auto h-5/6">
			<table className="w-full table-fixed border-collapse border border-black">
				<thead>
					<tr>
						<th className="w-3/12 border border-black py-2 break-all">Email</th>
						<th className="w-3/12 border border-black py-2">First Name</th>
						<th className="w-3/12 border border-black py-2">Last Name</th>
						<th className="w-3/12 border border-black py-2">ID</th>
					</tr>
				</thead>
				<tbody>
					{users.map((client =>
						<tr>
							<td className="w-3/12 border border-black p-1 break-all" >{client.email}</td>
							<td className="w-3/12 border border-black p-1">{client.firstName}</td>
							<td className="w-3/12 border border-black p-1">{client.lastName}</td>
							<td className="w-3/12 border border-black p-1">{client.userId}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default ClientList;
