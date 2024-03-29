import { Octicons } from "@expo/vector-icons"
import { NavigationProp } from "@react-navigation/native"
import React from "react"
import { Animated, Easing, Modal, Pressable, Text, View } from "react-native"
import styled from "styled-components/native"
import { IForm } from "../../api/interfaces/form.interfaces"
import Pattern from "../assets/Pattern"
import { Button } from "./elements"
import BackButton from "./elements/BackButton"

interface ISurveyCard {
    setScrollEnabled: React.Dispatch<React.SetStateAction<boolean>>
    isDragging: React.MutableRefObject<boolean>
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>
    modalActive: boolean
    navigation: NavigationProp<any>
    form: IForm
    cardPressed: React.MutableRefObject<boolean>
    slideAnim: Animated.Value
}

const SurveyCard = ({ form, modalActive, setModalActive, setScrollEnabled, navigation, cardPressed, slideAnim }: ISurveyCard) => {
    const handleLongPress = () => {
        cardPressed.current = true
        Animated.timing(slideAnim, {
            toValue: -310,
            duration: 500,
            easing: Easing.out(Easing.quad),
            useNativeDriver: false,
        }).start(() => {
            setScrollEnabled(true) // Enable vertical scrolling after animation
        })
    }

    const handlePressOut = () => {
        if (!cardPressed.current) {
            Animated.spring(slideAnim, {
                toValue: 0,
                friction: 5,
                useNativeDriver: false,
            }).start(() => {
                setScrollEnabled(true) // Enable vertical scrolling after animation
            })
        }
    }

    const toggleModal = () => {
        setModalActive(!modalActive)
    }

    return (
        <>
            <SSliderView style={{ transform: [{ translateX: slideAnim }] }}>
                <SSurveyCard onPress={() => navigation.navigate("AnswersScreen", { id: form.id })} onLongPress={handleLongPress} onPressOut={handlePressOut}>
                    <STitle>{form.name}</STitle>
                    <SReplies>
                        {0} Replies - PIN: {form.pin}
                    </SReplies>
                    <View>
                        <SSurveyText>See replies</SSurveyText>
                    </View>
                    <SPattern color="#274CEE" PatternWidth={240} PatternHeight={290} />
                </SSurveyCard>
                <SEditOption onPress={() => navigation.navigate("EditScreen", { id: form.id })}>
                    <Octicons name="pencil" size={28} color="white" />
                </SEditOption>
                <STrashOption onPress={toggleModal}>
                    <Octicons name="trash" size={28} color="white" />
                </STrashOption>
            </SSliderView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalActive}
                onRequestClose={() => {
                    setModalActive(false)
                }}>
                <SModalInner>
                    <SModalContent>
                        <BackButton color="text" onPress={toggleModal} title="Delete this survey?" icon="x" />
                        <SModalWrapper>
                            <SModalText>Are you sure you want to proceed? This action is not reversible.</SModalText>
                            <Button title="Delete this survey" variant="error" onPress={() => {}} />
                        </SModalWrapper>
                    </SModalContent>
                </SModalInner>
            </Modal>
        </>
    )
}

export default SurveyCard

const SSliderView = styled(Animated.View)`
    width: 100%;
    position: relative;
    flex-direction: row;
`

const SSurveyCard = styled(Pressable)`
    background-color: ${(props) => props.theme["PRIMARY_COLOR_LIGHT"]};
    width: 100%;
    border-radius: 26px;
    position: relative;
    padding: 30px 20px;
    overflow: hidden;
    margin-right: 16px;
`

const STitle = styled(Text)`
    font-size: 24px;
    font-family: "Nunito_800ExtraBold";
`

const SReplies = styled(Text)`
    font-size: 16px;
    font-family: "Nunito_700Bold";
    color: ${(props) => props.theme["PRIMARY_COLOR_DARK"]};
    opacity: 0.7;
`

const SPattern = styled(Pattern)`
    position: absolute;
    top: -50%;
    right: -50%;
    transform-origin: center center;
    z-index: -1;
    transform: scale(1);
    opacity: 0.3;
`

const SEditOption = styled(Pressable)`
    background-color: ${(props) => props.theme["PRIMARY_COLOR"]};
    height: 145px;
    width: 145px;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
    margin-right: 6px;
`

const STrashOption = styled(Pressable)`
    background-color: ${(props) => props.theme["ERROR"]};
    height: 145px;
    width: 145px;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
    margin-right: 16px;
`

const SModalInner = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const SModalContent = styled(View)`
    background-color: white;
    border-radius: 26px;
    padding: 20px;
    margin: 0 5px;
`

const SModalWrapper = styled(View)`
    margin-top: 36px;
`

const SModalText = styled(Text)`
    font-size: 16px;
    font-family: "Nunito_700Bold";
    margin-bottom: 20px;
`

const SSurveyText = styled(Text)`
    font-size: 16px;
    font-family: "Nunito_700Bold";
    color: ${(props) => props.theme["PRIMARY_COLOR_DARK"]};
    opacity: 0.7;
    margin-top: 8px;
`
