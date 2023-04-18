"use client";
import React, { useEffect, useState } from "react";
import { Person } from "@/types/personType";
import Image from "next/image";
import { UseListContext } from "@/app/Context/store";

type PersonID = {
  params: {
    personId: string;
  };
};

// const fetchPerson = async (id: string) => {
//   const getData = await fetch(`https://randomuser.me/api/?id=${id}`, {
//     cache: "no-cache",
//   });
//   const details = await getData.json();
//   return details.results;
// };

const PersonItem = ({ params: { personId } }: PersonID) => {
  const [personData, setPersonData] = useState([]);

  const { list, loading } = UseListContext();

  if (loading) {
    return <p>Chargement en cours...</p>;
  }
  //   const Individual = await fetchPerson(personId);
  //   console.log(Individual);

  // console.log(personId);

  // useEffect(() => {
  //   setLoading(true);
  //   const getData = async () => {
  //     const data = await fetch(`https://randomuser.me/api/?id=${personId}`, {
  //       cache: "no-cache",
  //     });
  //     const details = await data.json();
  //     setPersonData(details.results);
  //   };
  //   getData();
  //   setLoading(false);
  // }, []);

  // console.log(personData);

  //   const Person = getPersonDetails.map((Person: Person) => {
  //     <>
  //       <div className="max-w-xs">
  //         <Image
  //           src={Person.picture.medium}
  //           alt={Person.name.first}
  //           width={100}
  //           height={100}
  //         />
  //       </div>
  //     </>;
  //   });

  if (loading) {
    return <p>..Chargement</p>;
  }

  const test = personData?.map((Ind: Person) => {
    return (
      <>
        <div className="max-w-xs">
          <Image
            src={Ind?.picture.large}
            alt={Ind?.name.first}
            width={100}
            height={100}
          />
        </div>
        <p>Informations :</p>
        <p>Email : {Ind?.email}</p>
        <p>Nom d`utilisateur : {Ind?.login.username}</p>

        <div className="flex gap-1">
          <p>{Ind.name.title}</p>
          <p>{Ind.name.first}</p>
          <p>{Ind.name.last}</p>
          <br />
          <p>{Ind.dob.age} ans</p>
          <br />
          <p>Tel : {Ind.cell}</p>
          <p>Nationalité {Ind.nat}</p>
        </div>
        <p>Adresse : </p>
        <div className="flex gap-1">
          <p>{Ind.location.street.number}</p>
          <p>{Ind.location.street.name}</p>
          <p>{Ind.location.postcode}</p>
          <p>{Ind.location.city}</p>
          <p>{Ind.location.country}</p>
        </div>
      </>
    );
  });
  return (
    <>
      {/* {test} */}
      {list
        .filter((person: any) => person.login.uuid === decodeURI(personId))
        .map((Ind: any, i: number) => (
          <div
            className="flex items-center h-screen w-full justify-center"
            key={personId}
          >
            <div className="max-w-sm w-full">
              <div className="bg-white shadow-xl rounded-lg py-3">
                <div className="photo-wrapper p-2">
                  <Image
                    className="w-32 h-32 rounded-full mx-auto"
                    src={Ind?.picture.large}
                    alt={Ind?.name.first}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-center flex gap-1 justify-center">
                    <p className="text-xl text-gray-900 font-medium leading-8 ">
                      {Ind.name.first}
                    </p>
                    <p className="text-xl text-gray-900 font-medium leading-8 ">
                      {Ind.name.last}
                    </p>
                  </h3>
                  <div className="text-center text-gray-400 text-xs font-semibold">
                    <p>{Ind.login.username}</p>
                  </div>
                  <table className="text-xs my-3">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Address
                        </td>
                        <td className="px-2 py-2 text-indigo-600">
                          <div className="flex gap-1">
                            <p>{Ind.location.street.number}</p>

                            <p>{Ind.location.street.name}</p>
                          </div>
                          <div className="flex gap-1">
                            <p>{Ind.location.postcode}</p>
                            <p>{Ind.location.city}</p>
                          </div>
                          <p>{Ind.location.state}</p>
                          <p>{Ind.location.country}</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Phone
                        </td>
                        <td className="px-2 py-2 text-indigo-600">
                          {Ind.cell}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Email
                        </td>
                        <td className="px-2 py-2 text-indigo-600">
                          {Ind.email}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PersonItem;
