import React, { useState } from "react"
import { Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native"

// Components
import styled from "styled-components/native"
import { IForm } from "../../api/interfaces/form.interfaces"
import AuthHeader from "../components/AuthHeader"
import { Button } from "../components/elements"
import PinInput from "../components/elements/PinInput"
import useAPI from "../hooks/use-api"

export default function PinCodeScreen({ navigation }: any) {
  const [pincode, setPincode] = useState("")

  const { request } = useAPI<IForm>({ url: '/form/pin', id: pincode }, { autoGet: false })

  const handleEnterSurvey = async () => {
    const result = await request({ method: "get" })

    if (result.data) {
      const form = result.data as IForm
      navigation.navigate("SurveyScreen", { id: form.id })
    }
  }

  const pinLength = 6

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <SHeader>
            <AuthHeader />
          </SHeader>
          <SContainer>
            <SContent>
              <SScroll>
                <STitle>Pin code</STitle>
                <SText>Enter the pin code to join survey.</SText>
                <SInput>
                  <PinInput codeLength={pinLength} onChange={p => setPincode(p)} currentValue={pincode} />
                  <SInputButtons>
                    <Button disabled={pincode.length !== pinLength} variant="primary" title={"Enter survey"} onPress={handleEnterSurvey} />
                    <Button variant="dark" title={"Scan QR Code"} onPress={() => navigation.navigate("CameraScreen")} />
                  </SInputButtons>
                </SInput>
                <SFooter>
                  <SLogin>
                    Want to sign in instead? <SLoginLink onPress={() => navigation.navigate("LoginScreen")}>Sign in</SLoginLink>
                  </SLogin>
                </SFooter>
              </SScroll>
            </SContent>
          </SContainer>
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

const SContainer = styled(View)`
    position: relative;
    padding: 0 16px 20px 16px;
    height: 100%;
    background-color: ${props => props.theme["WHITE"]};
`

const SHeader = styled(View)`
    background-color: ${props => props.theme["WHITE"]};
`

const SScroll = styled(ScrollView)`
    width: 100%;
    text-align: center;
`

const SContent = styled(View)`
    flex: 1;
    height: 100%;
    justify-content: flex-start;
    margin-top: 32px;
    align-items: center;
`

const STitle = styled(Text)`
    text-align: center;
    font-size: 42px;
    margin-bottom: 8px;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_700Bold";
`

const SText = styled(Text)`
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_400Regular";
`

const SInput = styled(View)`
    margin-top: 32px;
    width: 100%;
    align-items: center;
`

const SInputButtons = styled(View)`
    gap: 8px;
    width: 100%;
`

const SFooter = styled(View)`
    width: 100%;
    align-items: center;
    margin-bottom: 100px;
    justify-content: flex-end;
    margin-top: 10px;
`

const SLogin = styled(Text)`
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_400Regular";
`

const SLoginLink = styled(Text)`
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme["PRIMARY_COLOR"]};
    font-family: "Nunito_600SemiBold";
    text-decoration: underline;
`
