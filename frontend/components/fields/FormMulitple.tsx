import Checkbox from "expo-checkbox"
import React, { useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import styled from "styled-components/native"
import { IFormFieldComponent } from "../../../api/interfaces/form.interfaces"

const FormMulitple = ({ isAnswering, fieldTitle, onAddOption, onTitleChange, onMultipleAnswerChange, options, onOptionChange }: IFormFieldComponent) => {
  const [checked, setChecked] = useState<string[]>([])

  const handleCheck = (id: string, order: number) => {
    const isChecked = checked.includes(id)
    let changeTo = [...checked]
    if (isChecked) {
      changeTo = changeTo.filter(x => x !== id)
    } else {
      changeTo.push(id)
    }
    setChecked([...changeTo])
    onMultipleAnswerChange?.(changeTo)
  }

  const handleNameChange = (name: string, order: number) => {
    onOptionChange?.('name', name, order)
  }

  return isAnswering ? (
    <SField>
      <SInput editable={false} placeholderTextColor="#232323" placeholder={fieldTitle || "Field name"} />
      <SInputHelp>Select 1 or more choices below</SInputHelp>
      <SChoices>
        {options?.map((item) => {
          const isChecked = checked.includes(item._id)
          return (
            <SChoice key={item.order}>
              <Checkbox value={isChecked} onValueChange={(v) => handleCheck(item._id, item.order || 0)} />
              <SInputChoice editable={false} value={item.name} placeholder="Name your choice..." placeholderTextColor="#232323" />
            </SChoice>
          )
        })}
      </SChoices>
    </SField>
  ) : (
    <SField>
      <SInput onChangeText={onTitleChange} value={fieldTitle} placeholderTextColor="#232323" placeholder="New field..." />
      <SInputHelp>Select 1 or more choices below</SInputHelp>
      <SChoices>
        {options?.map((item) => {
          const isChecked = checked.includes(item._id)
          return (
            <SChoice key={item.order}>
              <Checkbox disabled value={isChecked} onValueChange={(v) => handleCheck(item._id, item.order || 0)} />
              <SInputChoice onChangeText={(t) => handleNameChange(t, item.order || 0)} value={item.name} placeholder="Name your choice..." placeholderTextColor="#232323" />
            </SChoice>
          )
        })}
        <Pressable onPress={onAddOption}>
          <SChoiceAdd>Add new choice</SChoiceAdd>
        </Pressable>
      </SChoices>
    </SField>
  )
}

export default FormMulitple

const SField = styled(View)`
    border: 1px solid rgba(35, 35, 35, 0.2);
    border-radius: 26px;
    padding: 16px;
    margin-bottom: 8px;
`

const SInput = styled(TextInput)`
    border-radius: 8px;
    font-size: 24px;
    width: 100%;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_600SemiBold";
    margin-bottom: 16px;
`

const SInputHelp = styled(Text)`
    margin-bottom: 4px;
    font-size: 14px;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_600SemiBold";
`

const SChoices = styled(View)`
    margin-top: 0px;
`

const SChoice = styled(View)`
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
`

const SInputChoice = styled(TextInput)`
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_600SemiBold";
    margin-left: 8px;
`

const SChoiceAdd = styled(Text)`
    margin-top: 4px;
    font-size: 18px;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_600SemiBold";
`
