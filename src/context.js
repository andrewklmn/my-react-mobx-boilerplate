// Example of ContextProvider
import React from 'react'

export const AppDataContext = React.createContext()

export const AppDataProvider = AppDataContext.Provider
export const AppDataConsumer = AppDataContext.Consumer
