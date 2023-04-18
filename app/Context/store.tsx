"use client";

import { Person } from "@/types/personType";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import getRandom from "@/pages/api/getListe/page";

type List = {
  results: Person;
  info: {
    seed: string;
    results: number;
    page: number;
    version: number;
  };
};

interface ContextProps {
  loading: boolean;
  list: List[];
  setList: Dispatch<SetStateAction<List[]>>;
}

const ListContext = createContext<ContextProps>({
  loading: false,
  list: [],
  setList: (): List[] => [],
});

export const ListContextProvider = ({ children }: any) => {
  const [list, setList] = useState<[] | List[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const listData = async () => {
      const data = await getRandom();
      setList(data.results);
    };
    if (list.length === 0) {
      listData();
    }
    console.log(list);
    setLoading(false);
  }, []);

  return (
    <ListContext.Provider value={{ list, setList, loading }}>
      {children}
    </ListContext.Provider>
  );
};

export const UseListContext = () => useContext(ListContext);
