import React, {Component,  useEffect, useState  } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, ActivityIndicator, Alert, Dimensions,  TouchableOpacity } from 'react-native'
import { ListItem, Avatar, Header, SearchBar, Image, Card, Button, Icon, Chip } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import addIcon from "../assets/addButton.png"

const addImagesScreen = (props) => {

  return(
    
    <ScrollView style={styles.containerApp} showsVerticalScrollIndicator={false} horizontal={false}>
    <Header
      backgroundColor="#FFFFFF"
      leftComponent={
        <View>
          <Ionicons onPress={() => props.navigation.navigate('Profile')} name="chevron-back" size={24} color="black" />
        </View>
      }
      leftContainerStyle={
        { marginLeft: 20 }
      }
    />
    <View style={{
      flex: 50, marginLeft: 30,
      marginTop: 10
    }}>
 <Text style={{ fontSize: 18, textAlign: "left", color: "#D1C900", fontWeight: "500", marginTop: 20 }}> Selecciona imagenes </Text>
    </View>

    <Grid>
        <Row>
            <Col>
            <Card
            
containerStyle={{ 
justifyContent: 'center',
alignItems: 'center',
marginTop: 20,
backgroundColor: '#F7F395',
width: 150,
height: 150,
borderRadius: 18,
borderWidth: 0, // Remove Border
shadowColor: 'rgba(0,0,0, 0.0)',
shadowOffset: { height: 0, width: 0 },
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
marginLeft: 30, }}>

<Image onPress={() => props.navigation.navigate('Categories', {
                categoriaID: categoria.id,
                categoriaName: categoria.Category
              })} style={{ width: 44, height: 33,  justifyContent: 'center', alignItems: 'center' }} source={addIcon} />


</Card>
            </Col>
            <Col>
            <Card
            
containerStyle={{ 
justifyContent: 'center',
alignItems: 'center',
marginTop: 20,
backgroundColor: '#F7F395',
width: 150,
height: 150,
borderRadius: 18,
borderWidth: 0, // Remove Border
shadowColor: 'rgba(0,0,0, 0.0)',
shadowOffset: { height: 0, width: 0 },
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0 }}>

<Image onPress={() => props.navigation.navigate('Categories', {
                categoriaID: categoria.id,
                categoriaName: categoria.Category
              })} 
              style={{ width: 44, height: 33,  justifyContent: 'center', alignItems: 'center' }} source={addIcon} />


</Card>
            </Col>
        </Row>

        <Row>
            <Col>
            <Card
containerStyle={{ 
justifyContent: 'center',
alignItems: 'center',
marginTop: 20,
backgroundColor: '#F7F395',
width: 150,
height: 150,
borderRadius: 18,
borderWidth: 0, // Remove Border
shadowColor: 'rgba(0,0,0, 0.0)',
shadowOffset: { height: 0, width: 0 },
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0,
marginLeft: 30,}}>

<Image onPress={() => props.navigation.navigate('Categories', {
                categoriaID: categoria.id,
                categoriaName: categoria.Category
              })} style={{ width: 44, height: 33,  justifyContent: 'center', alignItems: 'center' }} source={addIcon} />


</Card>
            </Col>
            <Col>
            <Card
containerStyle={{ 
justifyContent: 'center',
alignItems: 'center',
marginTop: 20,
backgroundColor: '#F7F395',
width: 150,
height: 150,
borderRadius: 18,
borderWidth: 0, // Remove Border
shadowColor: 'rgba(0,0,0, 0.0)',
shadowOffset: { height: 0, width: 0 },
shadowOpacity: 0,
shadowRadius: 0,
elevation: 0 }}>

<Image onPress={() => props.navigation.navigate('Categories', {
                categoriaID: categoria.id,
                categoriaName: categoria.Category
              })} style={{ width: 44, height: 33,  justifyContent: 'center', alignItems: 'center' }} source={addIcon} />


</Card>
            </Col>
        </Row>

    </Grid>

    <View style={{
    flex: 50, marginLeft: 40,
    marginTop: 20
  }}>
    <Text style={{ fontSize: 16, textAlign: "left", color: "#7C7C7C", fontWeight: "500", letterSpacing: -1 }} > Selecciona las mejores imagenes de tu animalito</Text>
    <Text style={{ fontSize: 18, textAlign: "left", color: "#7C7C7C", fontWeight: "700", letterSpacing: -1 }} > Nos encanta verlos felices! </Text>

    <Text style={{ marginTop: 15, fontSize: 18, textAlign: "left", color: "#7C7C7C", fontWeight: "700", letterSpacing: -1 }} >Procura que la imagen sea de la mejor calidad. </Text>
    <Text style={{ marginTop: 15, fontSize: 18, textAlign: "left", color: "#7C7C7C", fontWeight: "700", letterSpacing: -1 }} >Cuando tengas las 4 imagenes cargadas presiona continuar. </Text>
  
  </View>



    <View style={styles.btnParentSection}>
    
        <Text style={styles.btnText}>Choose File</Text>
      
      </View>

<View style={styles.container}>
    
        <Card
        containerStyle={{ 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#F7F395',
        width: 150,
        height: 150,
        borderRadius: 18,
        borderWidth: 0, // Remove Border
        shadowColor: 'rgba(0,0,0, 0.0)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0 }}>
        
        <Image
         
        style={{ width: 44, height: 33,  justifyContent: 'center', alignItems: 'center' }} source={addIcon} />
        
        
        </Card>

      

   

        
      </View>

    <Button
    title="Continuar"
    type="solid"
    buttonStyle={{ backgroundColor: "#F7F395", height: 55, width: 270, borderRadius: 18, }}
    containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
    titleStyle={{ fontSize: 18, color: "#212121", fontWeight: "500", letterSpacing: -1 }}
  />

    </ScrollView> 
  )
}



// HOJA DE ESTILOS 
const styles = StyleSheet.create({

  containerApp: {
    backgroundColor: "#FFFFFF",
  },

  imageContainer: {
    padding: 30
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 18,
  },

    ImageSections: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical: 8,
      justifyContent: 'center'
    },
    images: {
      width: 150,
      height: 150,
      borderColor: 'black',
      borderWidth: 1,
      marginHorizontal: 3
    },
    btnParentSection: {
      alignItems: 'center',
      marginTop:10
    },
    btnSection: {
      width: 225,
      height: 50,
      backgroundColor: '#DCDCDC',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom:10
    },
    btnText: {
      textAlign: 'center',
      color: 'gray',
      fontSize: 14,
      fontWeight:'bold'
    }

});

export default addImagesScreen  
  
