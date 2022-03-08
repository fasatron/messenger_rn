import React, {
  Children,
  ComponentProps,
  FC,
  ReactElement,
  ReactNode,
} from 'react'
import { StyleSheet, View } from 'react-native'

import { Button } from '@components'
import { colors } from '@theme'

interface ToggleButtonGroupProps<T> {
  onChange: (value: T) => void,
  value: T,
  children: ReactNode,
}

interface ToggleButtonProps extends ComponentProps<typeof Button>{
  value: string,
  selected?: boolean,
}

export const ToggleButton: FC<ToggleButtonProps> = (props) => (
  <Button
    {...props}
    style={[styles.button, !props.selected && {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ccc',
    }]}
    accessibilityState={{
      selected: props.selected,
    }}
    titleStyle={[styles.buttonTitle, !props.selected && {
      color: colors.secondary,
    }]}
  />
)

export const ToggleButtonGroup = <T extends {}>({
  onChange,
  value,
  children,
}: ToggleButtonGroupProps<T>) => (
  <View style={styles.container}>
    {Children.map(children as ReactElement[], (child: ReactElement) => (
      <child.type
        {...child.props}
        selected={value === child.props.value}
        onPress={() => onChange(child.props.value)}
      />
    ))}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    marginRight: 24,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  buttonTitle: {
    fontSize: 12,
  },
})
