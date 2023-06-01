import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/AuthApi'
import AuthSlice from './services/AuthSlice'
import { ProductsApi } from './services/ProductsApi'
import ProductsSlice from './services/ProductsSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    [authApi.reducerPath]:authApi.reducer,
    authSlice : AuthSlice,
    productsSlice : ProductsSlice
    

  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware,authApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)