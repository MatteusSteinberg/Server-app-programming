import React from "react"
import styled, { css } from "styled-components/native"

interface IButton {
    title: string
    onPress?: () => void
    full?: boolean
    icon?: React.ReactNode
    variant: "primary" | "primary-outline" | "dark" | "dark-outline"
}

const Button = (props: IButton) => {
    return (
        <SButton {...props} onPress={props.onPress}>
            <SView>
                <SText {...props}>{props.title}</SText>
                {props.icon && <SIcon>{props.icon}</SIcon>}
            </SView>
        </SButton>
    )
}

export default Button

const SButton = styled.Pressable<IButton>`
    border-radius: 28px;
    text-align: center;
    padding: 22px 26px;
    border: 2px solid transparent;

    ${props =>
        props.variant === "primary" &&
        css`
            background-color: ${props.theme["PRIMARY_COLOR"]};
            border-color: ${props.theme["PRIMARY_COLOR"]};
        `}

    ${props =>
        props.variant === "dark" &&
        css`
            background-color: ${props.theme["TEXT"]};
            border-color: ${props.theme["TEXT"]};
        `}

    ${props =>
        props.variant === "primary-outline" &&
        css`
            background-color: transparent;
            border-color: ${props.theme["PRIMARY_COLOR"]};
        `}

    ${props =>
        props.variant === "dark-outline" &&
        css`
            background-color: transparent;
            border-color: ${props.theme["TEXT"]};
        `}
`

const SView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const SText = styled.Text<IButton>`
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    font-family: 'Nunito_700Bold';

    ${props =>
        props.variant === "primary" &&
        css`
            color: ${props.theme["WHITE"]};
        `}

        ${props =>
            props.variant === "dark" &&
            css`
                color: ${props.theme["WHITE"]};
            `}

        ${props =>
            props.variant === "primary-outline" &&
            css`
                color: ${props.theme["TEXT"]};
            `}

        ${props =>
            props.variant === "dark-outline" &&
            css`
                color: ${props.theme["TEXT"]};
            `}

`

const SIcon = styled.View`
    margin-left: 10px;

    svg {
        width: 24px;
        height: 24px;
    }
`
