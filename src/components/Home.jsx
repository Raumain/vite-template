import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <>
      <div className="my-[10rem] text-center">
        <p className="text-2xl font-bold">
        <span>
          <button className="bg-[#234] text-white uppercase px-2 mr-3 rounded" onClick={() => changeLanguage('fr')}>fr</button>
          <button className="bg-[#234] text-white uppercase px-2 mr-3 rounded" onClick={() => changeLanguage('en')}>en</button>
        </span>
        <br />
        <span>{t('title')}</span>
        <br />
        <span>{t('description.part1')}</span>
        <br />
        </p>
      </div>
    </>
  )
}
