import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { CodeField, Cursor } from 'react-native-confirmation-code-field'

import { Button, Text } from '@components'

import { IConfirmCodeFieldProps } from './types'
import { useConfirmCodeField } from './hooks'

const CELL_COUNT = 6

export const ConfirmCodeField: FC<IConfirmCodeFieldProps> = (props) => {
  const {
    isConfirmButtonDisabled,
    ref,
    value,
    cellProps,
    getCellOnLayoutHandler,
    handleCellChange,
    handleConfirmPress,
  } = useConfirmCodeField(props)

  return (
    <View>
      <CodeField
        {...cellProps}
        ref={ref}
        value={value}
        onChangeText={handleCellChange}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType='numeric'
        textContentType='oneTimeCode'
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            secondary
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Button
        title='Confirm'
        style={styles.button}
        disabled={isConfirmButtonDisabled}
        onPress={handleConfirmPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginBottom: 15,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 35,
    marginHorizontal: 5,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  button: {
    width: '100%',
    marginBottom: 15,
  },
})
