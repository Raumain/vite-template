import { useTranslation } from 'react-i18next'

export default function Resources() {
  const { t } = useTranslation()
  return (
    <div className="my-12 grid place-items-center">
      <p>{t('ressource.security-message')}</p>
      <div>
        <img src="https://random.imagecdn.app/500/250" />
      </div>
    </div>
  )
}
