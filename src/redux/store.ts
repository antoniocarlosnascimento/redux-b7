import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";

import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
});


// Cria todos os types de todos os reducers (Cria um Type geral com o type de todos os reducers)
export type RootState = ReturnType<typeof store.getState>;