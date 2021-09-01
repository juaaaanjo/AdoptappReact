import React from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, ActivityIndicator, Alert } from 'react-native'
import { ListItem, Avatar, Header, SearchBar, Image, Card, Button, Icon, FAB, Chip } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = (props) => {
    return (

      
        <View style={{ flex: 1, backgroundColor: "#FFFFFF"}}>

<Header
 containerStyle={{
  marginTop: 20 
}}
        backgroundColor="#FFFFFF"
        leftComponent={
          <View>
               <Text style={{ fontSize: 18, textAlign: "left", color: "#D1C900", fontWeight: "500", marginTop: 20 }}>Publica un Extravio o Adopcion</Text>
          </View>
        }
        leftContainerStyle={
          { flex: 60, marginLeft: 20 }
        }
        rightContainerStyle={
          { flex: 20, marginRight: 20 }
        }
        rightComponent={
          <View>
      <Button 
        buttonStyle={{ backgroundColor: "#F7F395", height: 67, width: 67, borderRadius: 36}} 
        onPress={() => props.navigation.navigate('addImages')} 
        icon={
            <Ionicons
           
              name="chevron-forward"
              size={24}
              color="black"
            />
          }/>

          </View>
        }
      />

        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        <Avatar style={{ width: 150, height: 150, borderRadius: 72 }} 
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        avatarStyle={{  borderRadius: 72 }} />

<View  style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 26, color: "181725", fontWeight: "500", letterSpacing: -1  }} > Juan Jose Perez</Text>
            <Text style={{ fontSize: 18, color: "#4C4F4D", fontWeight: "500", letterSpacing: -1  }}> Bogota </Text>
          
        </View>

        <View  style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
        <Chip
          title="Editar Perfil"
          containerStyle={styles.chipCardProfile}
          buttonStyle={{ backgroundColor: '#F2F2F2', marginTop: 3 }}
          titleStyle={{ color: '#7E8389', fontWeight: "700", letterSpacing: -1 }}
        />
        </View>
        </View>
        <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30
      }}>

        <Text style={{ fontSize: 16, color: "#181725", textAlign: "left", fontWeight: "500" }} > Tus Posts </Text>
        <Text style={{ fontSize: 16, color: "#D1C900", textAlign: "right", fontWeight: "500" }} > Mostrar mas </Text>
      </View>
      </View>
    )
}  

// HOJA DE ESTILOS 
const styles = StyleSheet.create({

    containerApp: {
      backgroundColor: "#FFFFFF",
    },
  
    chipCardProfile: {
      height: 40,
      width: 98,
    }
  
  });
  

export default ProfileScreen