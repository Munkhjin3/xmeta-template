import React from 'react'
import { Modal } from './modal'
import { Lock } from 'lucide-react'
import { Button, InputOTP, InputOTPGroup, InputOTPSlot, Typography } from '../ui';

export const SmsModal = ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  }) => {
  return (
    <Modal icon={<Lock />} isOpen={isOpen} onClose={onClose} title="">
    <div className="flex flex-col gap-5">
      <div>
        <Typography variant={"heading3"}>
        Security verification SMS
        </Typography>
        <Typography>
        To secure your account, please complete the following virification.We have send verification code to +976****1204
        </Typography>
      </div>
      <div className="w-full flex flex-col gap-4">
        <Typography>Verification code</Typography>
        <InputOTP className="w-full justify-center" maxLength={6} autoFocus>
          <InputOTPGroup className="flex w-full gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <InputOTPSlot
                key={index}
                className="h-14 w-full rounded-lg border p-4 text-2xl font-bold text-gray-300"
                index={index}
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
        <Typography>Didn’t get a code? Click to resend.</Typography>
      </div>
      <div className="w-full flex gap-3">
        <Button variant={"outline"} className="w-full">
          Cancel
        </Button>
        <Button className="w-full">Confirm</Button>
      </div>
    </div>
  </Modal>
  )
}
