import React from 'react';
import { User } from '../models/User';

type ClientListProps = {
	clients: User[] | undefined;
}

function ClientList(props: ClientListProps) {

	return (
		<div className="m-2 w-2/3">
			<table className="w-full table-fixed border-collapse border border-black">
				<thead>
					<tr>
						<th className="w-3/12 border border-black py-2">Email</th>
						<th className="w-3/12 border border-black py-2">First Name</th>
						<th className="w-3/12 border border-black py-2">Last Name</th>
						<th className="w-3/12 border border-black py-2">ID</th>
					</tr>
				</thead>
				<tbody>
					{props.clients?.map((client =>
						<tr>
							<td className="w-3/12 border border-black p-1" >{client.email}</td>
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
