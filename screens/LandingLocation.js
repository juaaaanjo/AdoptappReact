import React, { useState, useEffect } from 'react'
import { render } from 'react-dom';
import { View, Text, StyleSheet, ScrollView, TextInput, ActivityIndicator, Alert, Picker } from 'react-native'
import { ListItem, Avatar, Header, SearchBar, Image, Card, Button, Icon, Chip, Input } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import data from '../ciudades.json'

const LandingLocation = (props) => {

  const [selectedDept, setSelectedDept] = useState("Amazonas");
  const [selectedCity, setSelectedCity] = useState("Leticia");
  const [selectedID, setSelectedID] = useState(0);

  const xd = () => {
      console.log(ciudadesData.departamento)
  }
    return (
        <View style={{  backgroundColor: "#FFFFFF"}}>  
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
            <View  style={{ marginTop: 200, marginLeft: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "left", color: "#7C7C7C", fontWeight: "400", letterSpacing: -1 }}>Departamento</Text>

<Picker
        selectedValue={selectedDept}
        style={{ height: 50, width: 150, borderWidth: 0, // Remove Border
            shadowColor: 'rgba(0,0,0, 0.0)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0 }}
        onValueChange={(itemValue) =>  setSelectedDept(itemValue)
        } >
        {

data.map ((data) => {
 
    if (selectedDept == data.departamento){
        setSelectedID(data.id)
        console.log(selectedDept, selectedID)

        return  (<Picker.Item 
            itemStyle={{ fontSize: 18, color: "#7C7C7C", fontWeight: "400", letterSpacing: -1 }}
            label={data.departamento} value={data.departamento} key={data.id}/>)
    }
  
})
        }

        </Picker>
        </View>

        <View  style={{ marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontSize: 16, textAlign: "left", color: "#7C7C7C", fontWeight: "400", letterSpacing: -1 }}>Ciudad</Text>

<Picker
        selectedValue={selectedCity}
        style={{ height: 50, width: 150, borderWidth: 0, // Remove Border
            shadowColor: 'rgba(0,0,0, 0.0)',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
            shadowRadius: 0,
            elevation: 0 }}
         
        onValueChange={(itemValue) =>  setSelectedCity(itemValue)
        } >
        {
data.map ((data) => {

        return  (<Picker.Item 
            itemStyle={{ fontSize: 18, color: "#7C7C7C", fontWeight: "400", letterSpacing: -1 }}
            label={data.ciudades.join('\n')} value={data.ciudades} key={data.id}/>)
    

})

        }

        </Picker>
        </View>

          <Button
                onPress={() => props.navigation.navigate('LandingPhone')}
                    title="Comenzar"
                    type="solid"
                    buttonStyle={{ backgroundColor: "#F27584", height: 55, width: 270, borderRadius: 18 }}
                    containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    titleStyle={{ fontSize: 18, color: "#212121", fontWeight: "500", letterSpacing: -1 }}
                />  
      </View>
    )
}  

export default LandingLocation