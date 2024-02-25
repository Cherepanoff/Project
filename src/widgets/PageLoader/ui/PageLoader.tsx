import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './PageLoader.module.scss'
import { type FC } from 'react'
import { Loader } from 'shared/ui/Loader'
interface PageLoaderProps {
  className?: string
}
export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
		<div className={classNames(cls.PageLoader, {}, [className])}>
			<Loader/>
		</div>
  )
}
