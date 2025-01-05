import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar')

  useEffect(() => {
    // document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}