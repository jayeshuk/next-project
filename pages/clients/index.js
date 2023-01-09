import React from "react";
import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "max", name: "Maxy" },
    { id: "eman", name: "Emanuel" },
  ];

  return (
    <div>
      ClientsPage
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
