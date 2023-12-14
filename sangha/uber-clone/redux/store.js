import { configureStore } from "@reduxjs/toolkit"

import { navReducer } from "./slices/nav-slice"

const store = configureStore({
    reducer: {
        nav: navReducer
    }
})

    export default store
