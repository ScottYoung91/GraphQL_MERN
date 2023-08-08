import { gql, useQuery } from '@apollo/client';

import ClientRow from './ClientRow';
import React from 'react';

const GET_CLIENTS = gql`
	query GetClients {
		clients {
			id
			name
			email
			phone
		}
	}
`;

const Clients = () => {
	const { loading, error, data } = useQuery(GET_CLIENTS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: Something went wrong</p>;
	return (
		<>
			{!loading && !error && (
				<table className='table table-hover mt-3'>
					<thead>
						<tr>
							<th scope='col'>Name</th>
							<th scope='col'>Email</th>
							<th scope='col'>Phone</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{data.clients.map((client: any) => (
							<ClientRow key={client.id} client={client} />
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default Clients;
