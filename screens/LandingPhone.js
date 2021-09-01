import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { ListItem, Avatar, Header, SearchBar, Image, Card, Button, Icon, Chip, Input } from 'react-native-elements';

import adoptappLogo from "../assets/icon.png"

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import PhoneInput from "react-native-phone-number-input";
import firebaseMain from 'firebase/app' 
import firebase from '../database/firebase'
import { Ionicons } from '@expo/vector-icons';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';


const LandingPhone = (props) => {

    var firebaseConfig = {
        apiKey: "AIzaSyC8K6B3AlL9yopfeZfhK7BDMPyDdu1XNrM",
        authDomain: "react-adoptapp.firebaseapp.com",
        projectId: "react-adoptapp",
        storageBucket: "react-adoptapp.appspot.com",
        messagingSenderId: "741889216786",
        appId: "1:741889216786:web:9a8d5c79c56f128268e3cb",
        measurementId: "G-7JZCRRK5TX"
      };



    const recaptchaVerifier = useRef(null);
    const phoneInput = useRef(null);

    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, showMessage] = useState("");
    const [verificationId, setVerificationId] = useState(null);
    const [verificationCode, setVerificationCode] = useState(null);

    return (
        <ScrollView style={styles.containerApp} showsVerticalScrollIndicator={false} horizontal={false}>

            <Header
                backgroundColor="#FFFFFF"
             
                leftComponent={
                  <View>
                    <Ionicons onPress={() => props.navigation.navigate('Landing')} name="chevron-back" size={24} color="black" />
                  </View>
                }
                leftContainerStyle={
                  { flex: 50 }
                }
              
            />

<View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 40,
                    }}>
                        <Image
                            source={adoptappLogo}
                            style={{
                                width: 60,
                                height: 60,
                            }}

                        />
                    </View>

            <View style={{
                justifyContent: 'left',
                alignItems: 'left',
                marginTop: 200,
                marginLeft: 20,
            }}>
                <Text style={{ fontSize: 26, textAlign: "left", color: "#030303", fontWeight: "600", letterSpacing: -1 }}>
                {`Ingresa tu numero 
para continuar`}
                </Text>
            </View>


            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginRight: 10,

                marginTop: 20
            }}>

                <PhoneInput
                    ref={phoneInput}
                    placeholder="Introduce tu numero"
                    defaultCode="CO"                   
                   onChangeFormattedText={(phoneNumber) => setPhoneNumber(phoneNumber)
                        
                }                
              
                />

              

            </View>

            <Button

onPress={async () => 
 
    props.navigation.navigate('LandingPhoneConfirmation', {
        validation: verificationId
    })

}
title="Enviame el codigo xd"
type="clear"

containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
titleStyle={{ fontSize: 18, color:  "#D1C900", fontWeight: "500", letterSpacing: -1 }}
/>
          
            <Button

                disabled={!phoneNumber}
                onPress={async () => {
                    // The FirebaseRecaptchaVerifierModal ref implements the
                    // FirebaseAuthApplicationVerifier interface and can be
                    // passed directly to `verifyPhoneNumber`.

                    const phoneProvider = new firebaseMain.auth.PhoneAuthProvider();
                    const verificationId = await phoneProvider.verifyPhoneNumber(
                        phoneNumber,
                        recaptchaVerifier.current
                    );
                    setVerificationId(verificationId);
                   
                      props.navigation.navigate('LandingPhoneConfirmation', {
                        validation: verificationId,
                        phone: phoneNumber
                    })
                    
                }}
                title="Enviame el codigo xd"
                type="clear"
               
                containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                titleStyle={{ fontSize: 18, color:  "#D1C900", fontWeight: "500", letterSpacing: -1 }}
            />

<FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            />
            
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
            }} >
                <Text style={{ fontSize: 14, textAlign: "left", color: "#7E8389", fontWeight: "400", letterSpacing: -1 }} > O continua con tus redes sociales </Text>
            </View>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginRight: 70,
                marginLeft: 70,
                marginTop: 20
            }}>
                <Button
                    title={<AntDesign name="google" size={24} color="white" />}
                    type="solid"
                    buttonStyle={{ backgroundColor: "#DB4437", height: 54, width: 54, borderRadius: 10, }}
                    containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    titleStyle={{ fontSize: 18, color: "#212121", fontWeight: "500", letterSpacing: -1 }}
                />

                <Button
                    title={<AntDesign name="apple1" size={24} color="white" />}
                    type="solid"
                    buttonStyle={{ backgroundColor: "#000000", height: 54, width: 54, borderRadius: 10, }}
                    containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    titleStyle={{ fontSize: 18, color: "#212121", fontWeight: "500", letterSpacing: -1 }}
                />

                <Button
                    title={<FontAwesome5 name="facebook" size={24} color="white" />}
                    type="solid"
                    buttonStyle={{ backgroundColor: "#1877F2", height: 54, width: 54, borderRadius: 10, }}
                    containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    titleStyle={{ fontSize: 18, color: "#212121", fontWeight: "500", letterSpacing: -1 }}
                />
            </View>


            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginRight: 100,
                marginLeft: 100,
                marginTop: 20
            }}>
                <Text style={{ fontSize: 14, color: "#030303", fontWeight: "600", marginTop: 5, letterSpacing: -1 }} > ¿Ya tienes una cuenta? </Text>
                <Text
                    onPress={() => console.log(xd)}
                    style={{ fontSize: 14, color: "#D1C900", fontWeight: "600", marginTop: 5, letterSpacing: -1 }} > Inicia Sesion </Text>
            </View>
        </ScrollView>
    )
}


// HOJA DE ESTILOS 
const styles = StyleSheet.create({

    containerApp: {

        backgroundColor: "#FFFFFF",
    },

    chipsCards: {
        height: 40,
        width: 98,
    },

    chipCardProfile: {
        height: 40,
        width: 88,
    }


});


export default LandingPhone
