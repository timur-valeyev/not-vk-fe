import { FC } from 'react'
import { Modal } from 'shared'

import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
  opened: boolean
  closeModal: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ opened, closeModal }) => {
  return (
    <Modal opened={opened} closeModal={closeModal}>
      <LoginForm />
    </Modal>
  )
}
