import { createContext } from "vm";
import { UserService } from "./UserService";
import { ProgramService } from "./ProgramService";
import React, { useContext } from 'react';
import { Program } from "typescript";

export type ServiceContext = {
    userService: UserService,
    programService: ProgramService
} 

export const ServiceContext = React.createContext<ServiceContext | undefined>(undefined);

export const getContext = (): ServiceContext => {
    const  userService: UserService = new UserService();
    const programService: ProgramService = new ProgramService();
    return {
        userService, programService
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
