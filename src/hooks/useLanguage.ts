import useLanguageStore from "@/store/langStore"
import { en, pt } from "@/utils/lang"

export const useLanguage = () => {
  const { language } = useLanguageStore()

  const translations = language == 'en' ? en : pt

  return {
    translations
  }
}