import { useState } from 'react'
import { useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'

import { IConfirmCodeFieldProps } from './types'

const CELL_COUNT = 6

export const useConfirmCodeField = ({
  onConfirmPress,
}: IConfirmCodeFieldProps) => {
  const [value, setValue] = useState('')

  const isFulfilled = value.length === CELL_COUNT

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [cellProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })

  const handleCellChange = (val: string) => {
    if (!/^\d+$/.test(val)) return

    setValue(val)
  }

  const handleConfirmPress = () => {
    onConfirmPress(value)
  }

  return {
    ref,
    cellProps,
    value,
    setValue,
    isConfirmButtonDisabled: !isFulfilled,
    handleCellChange,
    handleConfirmPress,
    getCellOnLayoutHandler,
  }
}
