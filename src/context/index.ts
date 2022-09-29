import {createContext} from "react";

type LanguagesType = "ru" | "en"

interface ILangContext {
  language: LanguagesType,
  setLanguage: (newValue: string) => void
}

export const LangContext = createContext<ILangContext>({
  language: "ru",
  setLanguage: () => undefined
})