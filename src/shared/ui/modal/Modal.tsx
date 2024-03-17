import cn from 'classnames'
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from 'shared'

import CloseIcon from '../../../shared/assets/icons/close-icon.svg'

import styles from './Modal.module.scss'

interface ModalProps {
  children: ReactNode
  className?: string
  opened: boolean
  closeModal: () => void
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = ({ className, opened, closeModal, children }) => {
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const closeHandler = useCallback(() => {
    if (closeModal) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        setIsClosing(false)
        closeModal()
      }, ANIMATION_DELAY)
    }
  }, [closeModal])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )
  useEffect(() => {
    if (opened) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [opened, handleKeyDown])

  return (
    <Portal>
      <div
        className={cn(styles.modal, className, {
          [styles.opened]: opened,
          [styles.isClosing]: isClosing
        })}
      >
        <div className={cn(styles.overlay, className)} onClick={closeHandler}>
          <div className={cn(styles.content, className)} onClick={(e) => e.stopPropagation()}>
            <div className={styles.closeBtn} onClick={closeHandler}>
              <CloseIcon />
            </div>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
