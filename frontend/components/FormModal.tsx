import { Octicons } from "@expo/vector-icons"
import React from "react"
import { Pressable, Text, View } from "react-native"
import styled from "styled-components/native"
import { FormFieldType } from "../../api/interfaces/form.interfaces"
import BackButton from "./elements/BackButton"

interface FormModalProps {
  addFormField: (fieldType: FormFieldType) => void
  closeModal: () => void
  navigation?: any
}

const FormModal = ({ addFormField, closeModal, navigation }: FormModalProps) => {
  const handleAddField = (fieldType: FormFieldType) => {
    addFormField(fieldType)
    closeModal()
  }

  return (
    <SModalInner>
      <SModalContent>
        <BackButton color="text" onPress={() => closeModal()} title="Add new field?" icon="x" />
        <SModalWrapper>
          <SField onPress={() => handleAddField("text")}>
            <SFieldIcon>
              <Octicons name="typography" size={24} color="black" />
            </SFieldIcon>
            <SFieldText>Text Field</SFieldText>
          </SField>
          <SField onPress={() => handleAddField("multiple")}>
            <SFieldIcon>
              <Octicons name="inbox" size={24} color="black" />
            </SFieldIcon>
            <SFieldText>Multiple Choice</SFieldText>
          </SField>
          <SField onPress={() => handleAddField("image")}>
            <SFieldIcon>
              <Octicons name="image" size={24} color="black" />
            </SFieldIcon>
            <SFieldText>Image upload</SFieldText>
          </SField>
        </SModalWrapper>
      </SModalContent>
    </SModalInner>
  )
}

export default FormModal

const SModalInner = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
`

const SModalContent = styled(View)`
    background-color: white;
    border-radius: 26px;
    padding: 20px;
    margin: 0 5px;
    width: 100%;
`

const SModalWrapper = styled(View)`
    margin-top: 36px;
    gap: 8px;
`

const SField = styled(Pressable)`
    flex-direction: row;
    align-items: center;
    opacity: 0.4;
    border: 1px solid ${props => props.theme["TEXT"]};
    border-radius: 26px;
    padding: 16px;
`

const SFieldIcon = styled(View)`
    border: 1px solid ${props => props.theme["TEXT"]};
    border-radius: 16px;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SFieldText = styled(Text)`
    font-size: 20px;
    margin-left: 8px;
    font-family: "Nunito_500Medium";
    color: ${props => props.theme["TEXT"]};
`
