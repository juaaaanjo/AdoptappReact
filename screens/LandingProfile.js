import React, { useState, useEffect } from 'react'
import { render } from 'react-dom';
import { View, Text, StyleSheet, ScrollView, TextInput, ActivityIndicator, Alert, Picker } from 'react-native'
import { ListItem, Avatar, Header, SearchBar, Image, Card, Button, Icon, Chip, Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import profile from "../assets/profile.png"
import firebase from '../database/firebase'

const LandingProfile = (props) => {

    const phoneNumber = props.route.params.phone
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

   

    const saveNewUser = async () => {
        if (name === ''){
            alert('Introduce un nombre')
        } else {
           await firebase.db.collection('Users').add({
                Name: name,
                lastName: lastName,
                
            })
           props.navigation.navigate('Home');
        }
            }
    return (
        <ScrollView style={{backgroundColor: "#ffffff"}} showsVerticalScrollIndicator={false} horizontal={false}>
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 50
                }}>
                    <Image
                        source={profile}
                        style={{
                            width: 150,
                            height: 150,
                        }}

                    />

<Text
                 
                    style={{ fontSize: 18, color: "#D1C900", fontWeight: "400", marginTop: 10, letterSpacing: -1 }} > {name} </Text>
                
                <Text style={{ fontSize: 26, color: "#030303", fontWeight: "600",marginTop: 30, letterSpacing: -1 }}>
              Selecciona una imagen
                </Text>
                <Text style={{ fontSize: 16, textAlign:'center', color: "#7E8389", fontWeight: "400", marginTop: 20, letterSpacing: -1 }} > {`Esto ayudara a que quienes 
se contacten contigo tengan 
una idea mas precisa de quien eres`}
 </Text>
                    </View>

                    <View style= {{marginTop: 50}}>
                    <Text style={{fontSize: 16, marginTop: 20, marginLeft: 20, color: '#7C7C7C' }}>Tu nombre</Text>
                   
                    <TextInput
        style={{ marginVertical: 10, fontSize: 18, marginLeft: 20, marginTop: 20,  }}
        placeholder="Nombre"
        onChangeText={setName}
        autoCapitalize='words'
      />
</View>

<View style= {{marginTop: 30}}>
                    <Text style={{fontSize: 16, marginTop: 20, marginLeft: 20, color: '#7C7C7C' }}>Tu Apellido</Text>
                   
                    <TextInput
        style={{ marginVertical: 10, fontSize: 18, marginLeft: 20, marginTop: 20,  }}
        placeholder="Apellido"
        onChangeText={setLastName}
        autoCapitalize='words'
      />
</View>

<Button
                onPress={() => saveNewUser()}
                    title="Continuar"
                    type="solid"
                    buttonStyle={{ backgroundColor: "#F7F395", height: 55, width: 270, borderRadius: 18 }}
                    containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 40 }}
                    titleStyle={{ fontSize: 18, color: "#212121", fontWeight: "500", letterSpacing: -1 }}
                />

        </ScrollView>
    )
}  

export default LandingProfile