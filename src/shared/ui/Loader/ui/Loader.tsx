import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Loader.module.scss'
import { type FC } from 'react'
interface LoaderProps {
  className?: string
}
export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls['lds-heart'], {}, [className])}>
        <div/>
        <div/>
    </div>
  )
}
