import { Octicons } from "@expo/vector-icons"
import { format } from "date-fns"
import _ from "lodash"
import React from "react"
import { Text, TextInput, View } from "react-native"
import styled from "styled-components/native"
import { useAuth } from "../hooks/use-auth"

interface IDashboardHeader {
    onSearchChange: (s: string) => void
}

const DashboardHeader = ({ onSearchChange }: IDashboardHeader) => {
    const { user, unauthenticate } = useAuth()

    const date = new Date()
    const formattedDate = format(date, "EEE, dd MMM yyyy")

    const handleInput = _.debounce((text: string) => {
        onSearchChange(text)
    }, 300)

    return (
        <SHeader>
            <SHeaderInner>
                <SHeaderDate>
                    <SHeaderDateIcon size={24} name="calendar" color="#ffffff70" />
                    <SHeaderDateText>{formattedDate.toUpperCase()}</SHeaderDateText>
                    <SHeaderDateLogout onPress={unauthenticate}>Log out</SHeaderDateLogout>
                </SHeaderDate>
                <SHeaderMessage>
                    <SheaderMessageWelcome style={{ color: "#ffffff" }}>Welcome back</SheaderMessageWelcome>
                    <SheaderMessageUser>{user?.username || "Username"} 👋</SheaderMessageUser>
                </SHeaderMessage>
                <SHeaderSearch>
                    <SInput placeholderTextColor="#ffffff40" onChangeText={handleInput} placeholder="Search for a survey..." />
                </SHeaderSearch>
            </SHeaderInner>
        </SHeader>
    )
}

export default DashboardHeader

const SHeader = styled(View)`
    position: relative;
    width: 100%;
    height: 320px;
    background-color: ${(props) => props.theme["PRIMARY_COLOR"]};
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 65px;
    border-bottom-right-radius: 65px;
`
const SHeaderInner = styled(View)`
    padding: 80px 22px 16px 22px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    z-index: 10;
    height: 100%;
    padding-top: 75px;
    width: 100%;
`
const SHeaderDate = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 8px;
    z-index: 10;
`
const SHeaderDateIcon = styled(Octicons)`
    padding-bottom: 4px;
`
const SHeaderDateText = styled(Text)`
    font-size: 12px;
    font-weight: 500;
    font-family: "Nunito_700Bold";
    color: ${(props) => props.theme["WHITE"]};
    opacity: 0.6;
`

const SHeaderDateLogout = styled(Text)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["WHITE"]};
    margin-left: auto;
    font-size: 16px;
    font-family: "Nunito_700Bold";
`

const SHeaderMessage = styled(View)`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 10;
`
const SheaderMessageWelcome = styled(Text)`
    font-size: 18px;
    opacity: 0.5;
    font-family: "Nunito_600SemiBold";
    color: ${(props) => props.theme["WHITE"]};
`
const SheaderMessageUser = styled(Text)`
    font-size: 36px;
    font-family: "Nunito_700Bold";
    color: ${(props) => props.theme["WHITE"]};
`
const SHeaderSearch = styled(View)`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 10;
    width: 100%;
`
const SInput = styled(TextInput)`
    background-color: rgba(35, 35, 35, 0.3);
    width: 100%;
    font-size: 18px;
    font-family: "Nunito_600SemiBold";
    color: ${(props) => props.theme["WHITE"]};
    border-radius: 24px;
    padding: 12px 18px;
    margin-bottom: 10px;
    &::placeholder {
        font-size: 18px;
        font-family: "Nunito_600SemiBold";
        color: ${(props) => props.theme["WHITE"]} !important;
    }
`
