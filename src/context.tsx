import React, { useState, createContext } from 'react';

export const Context = createContext("");

type Props = {
  children: JSX.Element,
};

const UserProvider = ({ children }: Props) => {

  return (
    <Context.Provider value={""}>{children}</Context.Provider>
  );
};

export default UserProvider;
