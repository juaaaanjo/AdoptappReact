import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, ActivityIndicator, Alert } from 'react-native'
import { ListItem, Avatar, Header, SearchBar, Image, Card, Button, Icon, Chip, Input } from 'react-native-elements';
import firebaseMain from 'firebase/app' 
import { Ionicons } from '@expo/vector-icons';
import firebase from '../database/firebase'


const LandingPhoneConfirmation = (props) => {

    const validation = props.route.params.validation
    const phoneNumber = props.route.params.phone

    const [verificationId, setVerificationId] = useState(validation);
    const [verificationCode, setVerificationCode] = React.useState();

    return (
        <ScrollView style={styles.containerApp} showsVerticalScrollIndicator={false} horizontal={false}>

<Header
                backgroundColor="#FFFFFF"
             
                leftComponent={
                  <View>
                    <Ionicons onPress={() => props.navigation.navigate('LandingPhone')} name="chevron-back" size={24} color="black" />
                  </View>
                }
                leftContainerStyle={
                  { flex: 50 }
                }
              
            />

<View style={{
                justifyContent: 'left',
                alignItems: 'left',
                marginTop: 50,
                marginLeft: 20,
            }}>
                <Text style={{ fontSize: 26, textAlign: "left", color: "#030303", fontWeight: "600", letterSpacing: -1 }}>
                    {`Ingresa tu codigo 
de 6 Digitos`}</Text>
            </View>

            <Text style={{fontSize: 16, color: "#7C7C7C", marginTop: 20, marginLeft: 20, }}>Codigo</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17, marginLeft: 20, marginTop: 20,}}
        editable={!!verificationId}
        placeholder="- - - - - -"
        onChangeText={setVerificationCode}
      />

<Text style={{ fontSize: 18, textAlign:'center', color: "#7E8389", fontWeight: "400", marginTop: 20, letterSpacing: -1 }} > {`Enviamos un codigo a tu numero 
${phoneNumber}`}
 </Text>

<Button
        title="Confirm Verification Code"
        type="solid"
        buttonStyle={{ backgroundColor: "#F7F395", height: 55, width: 270, borderRadius: 18 }}
        containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}
        titleStyle={{ fontSize: 18, color: "#212121", fontWeight: "500", letterSpacing: -1 }}
        disabled={!verificationId}
        onPress={async () => {
          
            const credential = firebaseMain.auth.PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await firebaseMain.auth().signInWithCredential(credential);
            props.navigation.navigate('LandingProfile', {phone: phoneNumber})
          
        }}
      />

<Button
        title="Prueba Boton"
        type="solid"
        buttonStyle={{ backgroundColor: "#F7F395", height: 55, width: 270, borderRadius: 18 }}
        containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
        titleStyle={{ fontSize: 18, color: "#212121", fontWeight: "500", letterSpacing: -1 }}
       
        onPress={() => props.navigation.navigate('LandingProfile', {phone: phoneNumber})}
      />
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

export default LandingPhoneConfirmation
