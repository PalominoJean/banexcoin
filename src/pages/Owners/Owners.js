import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const people = [
  {
    id: "b7139248-c8fe-4bf0-84fc-2a5e97ff8a24",
    created: "04 Dec 1995 00:12:00 GMT",
    updated: "04 Dec 1995 00:12:00 GMT",
    status: 0,
    username: "Jean",
    password: "Jean",
    country_code: "+51",
    phone: "967733601",
    fname: "Palomino",
    lname: "Ventura",
    address: "Av de los Precursores, 327, Cercado de Lima",
    birthdate: "04 Dec 1995 00:12:00 GMT",
  },
  {
    id: "b7139248-c8fe-4bf0-844c-2a5e97ff8a24",
    created: "04 Dec 1995 00:12:00 GMT",
    updated: "04 Dec 1995 00:12:00 GMT",
    status: 1,
    username: "Jean",
    password: "Jean",
    country_code: "+51",
    phone: "967733601",
    fname: "Palomino",
    lname: "Ventura",
    address: "Av. las palmas Ate Vitarte",
    birthdate: "04 Dec 1995 00:12:00 GMT",
  },
];

export default function Owners() {
  const [owners, setOwners] = useState([]);
  const [ownersLoading, setOwnersLoading] = useState(false);

  useEffect(() => {
    setOwnersLoading(true);
    const fetchOwners = () => {
      setOwnersLoading(true);
      setOwners(people);
      setOwnersLoading(false);
    };
    fetchOwners();
  }, []);

  const getFullName = (person) => {
    return `${person.fname} ${person.lname}`;
  };

  return (
    <div>
      <Header></Header>
      <div className="mt-5">
        <div>
          {owners.map((person) => (
            <div className="shadow border-gray-100 border rounded-lg p-5 m-2 block lg:flex">
              <div className="flex items-center lg:w-1/2">
                <div className="flex-shrink-0 h-10 w-10">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    alt="avatar"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-900">
                    {getFullName(person)}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="mr-3">
                      {person.country_code} {person.phone}
                    </span>
                    <span className="ml-3">
                      <FontAwesomeIcon icon={faCakeCandles} />
                    </span>
                    <span className="ml-2">
                      {format(new Date(person.birthdate), "yyyy-MM-dd")}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <span className="ml-2">{person.address}</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/6">
                <div className="text-sm font-medium text-gray-900">
                  {person.username}
                </div>
                <div>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-medium rounded ${
                      person.status
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {person.status ? "Activo" : "Inactivo"}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500 lg:w-1/3">
                <div>
                  creado el
                  <span className="text-sm font-medium text-gray-900 ml-1">
                    {format(new Date(person.created), "yyyy-MM-dd hh:mm")}
                  </span>
                </div>
                <div>
                  actualizado el
                  <span className="text-sm font-medium text-gray-900 ml-1">
                    {format(new Date(person.updated), "yyyy-MM-dd hh:mm")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col mt-5">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Username
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actualizacion
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {owners.map((person) => (
                <tr key={person.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {getFullName(person)}
                        </div>
                        <div className="text-sm text-gray-500">
                          <span className="mr-3">
                            {person.country_code} {person.phone}
                          </span>
                          <span>
                            <FontAwesomeIcon icon={faCakeCandles} />
                          </span>
                          <span className="ml-1">
                            {format(new Date(person.birthdate), "yyyy-MM-dd")}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          <span>
                            <FontAwesomeIcon icon={faLocationDot} />
                          </span>
                          <span className="ml-1">{person.address}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{person.title}</div>
                    <div className="text-sm text-gray-500">
                      <div className="text-sm font-medium text-gray-900">
                        {person.username}
                      </div>
                      <div>
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-medium rounded ${
                            person.status
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {person.status ? "Activo" : "Inactivo"}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>
                      creado el
                      <span className="text-sm font-medium text-gray-900 ml-1">
                        {format(new Date(person.created), "yyyy-MM-dd hh:mm")}
                      </span>
                    </div>
                    <div>
                      actualizado el
                      <span className="text-sm font-medium text-gray-900 ml-1">
                        {format(new Date(person.updated), "yyyy-MM-dd hh:mm")}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}
