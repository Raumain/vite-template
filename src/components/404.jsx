import { useTranslation } from 'react-i18next'

export default function Error404Page(){
    const { t } = useTranslation()
    return(
        <>
            <div className="my-[10rem] text-center">
                <h1 className="text-2xl font-bold">{t('404.h1')}</h1>
                <p>{t('404.p')}</p>
            </div>
        </>
    )
}