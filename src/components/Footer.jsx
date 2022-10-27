import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <div className='py-7 bg-[#1b252d] text-white grid grid-cols-1 place-items-center w-full'>
      <div className="shadow-lg">
        <div>
          <div className='mb-4 text-white text-center'>
            <p className='font-semibold'>{t('footer')}</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, eos alias. Modi, sequi, architecto assumenda, ad dicta maxime impedit neque doloribus nam earum incidunt laudantium </p>
          </div>
        </div>
      </div>
    </div>
  )
}
