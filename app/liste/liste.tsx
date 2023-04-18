"use client";
import React, { useState } from "react";
// import getRandom from "../../pages/api/getListe/page";
// import { Person } from "@/types/personType";
import Link from "next/link";
import { UseListContext } from "../Context/store";
import Image from "next/image";

// const listePersonnes = async () => {
//   const data = await getRandom();
//   return data.results;
// };

// const ListePersonnes = async () => {
const ListePersonnes = () => {
  const { list, loading } = UseListContext();
  const [displayCount, setDisplayCount] = useState(20);

  console.log(list.length);
  console.log(loading);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto flex flex-col max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 xl:col-span-2 w-full"
        >
          {list?.slice(0, displayCount).map((person: any) => {
            if (person.id.value === null) {
              // return <p className="text-red-700">NULL</p>;
              return null;
            }
            return (
              <Link key={person.id.value} href={`/liste/${person.login.uuid}`}>
                <li key={person.name.title}>
                  <div className="flex items-center gap-x-6">
                    <Image
                      className="h-16 w-16 rounded-full"
                      src={person.picture.medium}
                      width={100}
                      height={100}
                      alt=""
                    />
                    <div>
                      {/* <p className="text-indigo-700">{person.login.uuid}</p> */}
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.name.first}
                      </p>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name.last}
                      </h3>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
        {displayCount < list?.length && (
          <button
            onClick={() =>
              setDisplayCount((prevDisplayCount) => prevDisplayCount + 10)
            }
            type="button"
            className="text-gray-900 w-max bg-white mx-auto border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Afficher davantage
          </button>
        )}
      </div>
    </div>
  );
};

export default ListePersonnes;
