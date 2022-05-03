import React from "react";
import {storeType} from "./stateOfSoc";

const StoreContext = React.createContext({}as storeType)
export type ProviderType={
    store: storeType
    children: any
}
export const Provider = (props: ProviderType) =>{
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContext