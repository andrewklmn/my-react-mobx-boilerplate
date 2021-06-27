import React from 'react'

const StoreContext = React.createContext()

export const UserProvider = StoreContext.Provider
export const UserConsumer = StoreContext.Consumer

export default StoreContext