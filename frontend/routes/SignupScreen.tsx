import React, { useEffect, useState } from "react"
import { Keyboard, ScrollView, TouchableWithoutFeedback, View } from "react-native"

// Components
import styled from "styled-components/native"
import AuthHeader from "../components/AuthHeader"
import { Button } from "../components/elements"
import Input from "../components/elements/Input"
import useAPI from "../hooks/use-api"
import { useAuth } from "../hooks/use-auth"

export default function SignupScreen({ navigation }: any) {
  const { request, loading, error } = useAPI({ url: "/user/register" }, { autoGet: false })

  const { authenticate, refresh, user } = useAuth()

  const [registerSuccess, setRegisterSuccess] = useState(false)

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  })

  const handleOnRegister = async () => {
    if (form.password !== form.repeatPassword) {
      return
    }
    const register = await request({ method: "post", body: form })
    const auth = await authenticate(form.email || "", form.password || "")

    if (!register?.error && !auth?.error) {
      setRegisterSuccess(true)
    }
  }

  useEffect(() => {
    if (registerSuccess) {
      refresh()
    }
  }, [registerSuccess])

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
                <STitle>Sign up!</STitle>
                <SText>Let’s build some awesome surveys!</SText>
                <SForm>
                  <SFormText>Fill out the form</SFormText>
                  <SFormItem>
                    <Input placeholder="Username..." variant="dark" textContentType="username" onChangeText={v => setForm({ ...form, username: v })} />
                  </SFormItem>
                  <SFormItem>
                    <Input placeholder="E-mail..." variant="dark" textContentType="emailAddress" onChangeText={v => setForm({ ...form, email: v })} />
                  </SFormItem>
                  <SFormItem>
                    <Input placeholder="Password..." variant="dark" secureTextEntry textContentType="password" onChangeText={v => setForm({ ...form, password: v })} />
                  </SFormItem>
                  <SFormItem>
                    <Input placeholder="Confirm password..." variant="dark" secureTextEntry textContentType="password" onChangeText={v => setForm({ ...form, repeatPassword: v })} />
                  </SFormItem>
                  <SFormItem>
                    <Button variant="primary" onPress={handleOnRegister} title={"Register"} />
                  </SFormItem>
                </SForm>
                <SFooter>
                  <SLogin>
                    Already have an account? <SLoginLink onPress={() => navigation.navigate("LoginScreen")}>Sign in</SLoginLink>
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

const STitle = styled.Text`
    text-align: center;
    font-size: 42px;
    margin-bottom: 8px;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_700Bold";
`

const SText = styled.Text`
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_400Regular";
`

const SForm = styled.View`
    margin-top: 40px;
    width: 100%;
`

const SFormText = styled.Text`
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_600SemiBold";
    margin-bottom: 16px;
`

const SFormItem = styled.View`
    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0;
    }
`

const SFooter = styled.View`
    height: 100%;
    width: 100%;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 100px;
`

const SLogin = styled.Text`
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme["TEXT"]};
    font-family: "Nunito_400Regular";
`

const SLoginLink = styled.Text`
    font-size: 18px;
    font-weight: 400;
    color: ${props => props.theme["PRIMARY_COLOR"]};
    font-family: "Nunito_600SemiBold";
    text-decoration: underline;
`
