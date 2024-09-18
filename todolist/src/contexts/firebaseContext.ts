import { createContext  } from "react";
import { Api } from "../utils/api";

export const FirebaseContext = createContext<{api: Api} | undefined>(undefined)