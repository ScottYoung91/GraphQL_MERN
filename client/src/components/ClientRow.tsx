import React from 'react';

type Client = {
	id: string;
	name: string;
	email: string;
	phone: string;
};

type ClientRowProps = {
	client: Client;
};

const ClientRow = ({ client }: ClientRowProps) => {
	return (
		<tr key={client.id}>
			<td>{client.name}</td>
			<td>{client.email}</td>
			<td>{client.phone}</td>
			<td>
				<button className='btn btn-danger btn-sm'>Delete</button>
			</td>
		</tr>
	);
};

export default ClientRow;
