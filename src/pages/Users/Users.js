import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import people from "./data";

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
            <div className="lg:w-1/6 flex md:block items-center mt-3 lg:mt-0">
              <div className="text-sm text-gray-500 mr-2">
                <span className="text-sm font-medium text-gray-900 ml-1">
                  {person.username}
                </span>
                (usuario)
              </div>
              <div>
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-medium rounded  ${
                    person.status
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {person.status ? "Activo" : "Inactivo"}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500 lg:w-1/3 mt-3 lg:mt-0">
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
  );
}
