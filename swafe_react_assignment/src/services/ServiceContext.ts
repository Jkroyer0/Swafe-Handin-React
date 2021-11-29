import { createContext } from "vm";
import { UserService } from "./UserService";
import React, { useContext } from 'react';

export type ServiceContext = {
    userService: UserService
} 

export const ServiceContext = React.createContext<ServiceContext | undefined>(undefined);

export const getContext = (): ServiceContext => {
    const  userService: UserService = new UserService();
    return {
        userService
    }

}

export const useServiceContext = (): ServiceContext => {
    const context = useContext(ServiceContext)
    if(context == undefined)
    {
        throw new Error("must within provider to use context");
        
    }
    return context;
}
