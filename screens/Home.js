import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { ListItem, Avatar, Header, SearchBar, Image, Card, Button, Icon } from 'react-native-elements';
import firebase from '../database/firebase'


const HomeScreen = (props) => {

 const [posts, setPosts] = useState([])

  const [categories, SetCategories] = useState([])

  useEffect(() => {

    const categories = [];

    firebase.db.collection('Categorias').onSnapshot(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        const {Category, Category_Image, Color} = doc.data ()
        categories.push({
          id: doc.id,
          Category,
          Category_Image,
          Color
        })
      });
      SetCategories(categories)
    });

  }, [])

  useEffect(() => {

    const posts = [];

    firebase.db.collection('Animalitos').where('Type', '==', 'En Adopcion').onSnapshot(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        const { Name, Type, Breed, Category, Image } = doc.data()
        posts.push({
          id: doc.id,
          Name,
          Type,
          Breed,
          Category,
          Image
        })
      });
      setPosts(posts)
    });
  }, [])



  //APP FRONTEND
  return (

    <ScrollView showsVerticalScrollIndicator={false} horizontal={false} style={styles.containerApp}>
      <Header 
        backgroundColor="#F7F395"
        leftComponent={
          <View>
            <Text style={{ fontSize: 18, color: "#000000", fontWeight: "500" }} > Hola, Juan Jose </Text>
            <Text style={{ fontSize: 17, color: "#4C4F4D", fontWeight: "500" }}> Bogota </Text>
          </View>
        }
        leftContainerStyle={
          { flex: 50 }
        }
        rightComponent={<Avatar style={{ width: 34, height: 34 }} source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} rounded />}
      />

      <SearchBar

        placeholder="Buscar"
        round="true"
        searchIcon={{ size: 24 }}
        containerStyle={{
          backgroundColor: '#FFFFFF', borderBottomColor: 'transparent',
          borderTopColor: 'transparent', position: "relative", marginTop: 10
        }}
      />

      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 20
      }}>

        <Text style={{ fontSize: 22, color: "#181725", textAlign: "left", fontWeight: "500" }} > Adoptappbles </Text>
        <Text style={{ fontSize: 16, color: "#D1C900", textAlign: "right", fontWeight: "500" }} > Mostrar mas </Text>
      </View>

      <ScrollView  horizontal={true}
        decelerationRate={"normal"} showsHorizontalScrollIndicator={false} bounces={false} scrollEventThrottle={12} >     
      {
        posts.map(animales => {
          return (
    <View key={animales.id} >
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }} >
                  <Image
                   onPress={() => props.navigation.navigate('Details', {
                    postID: animales.id
                  })}
                    source={{ uri: animales.Image }}
                    style={{ width: 344, height: 195, borderRadius: 20, marginHorizontal: 30}}
                    PlaceholderContent={<ActivityIndicator />}
                  />

               
               </View>
                <View style={{ marginLeft: 35, marginTop: 15 }}>
                  <Text style={{ fontSize: 16, textAlign: "left", color: "#424242", fontWeight: "500" }} > {animales.Name} </Text>
                  <Text style={{ fontSize: 13, textAlign: "left", color: "#7E8389" }} > {animales.Breed} • {animales.Category} </Text>
                  <Text style={{ fontSize: 12, textAlign: "left", color: "#7E8389", fontWeight: "500" }} > {animales.Type} </Text>
                </View>
                </View>
          )
        })

      }
       </ScrollView>  

       
    

      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30
      }}>

        <Text style={{ fontSize: 22, color: "#181725", textAlign: "left", fontWeight: "500" }} > Explora Categorias </Text>
        <Text style={{ fontSize: 16, color: "#D1C900", textAlign: "right", fontWeight: "500" }} > Mostrar mas </Text>
      </View>

      <ScrollView horizontal={true}
        decelerationRate={"normal"} showsHorizontalScrollIndicator={false} bounces={false} scrollEventThrottle={12}>
     {
       categories.map(categoria => {
return (
  
  <View key={categoria.id}  style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
  <Card
  containerStyle={{ 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: categoria.Color,
    width: 344,
    height: 124,
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
                  })} style={{ width: 60, height: 60,  justifyContent: 'center', alignItems: 'center' }} source={{uri: categoria.Category_Image}} />

<Text style={{ fontSize: 20, textAlign: "center", color: "#000000", fontWeight: "500" }}> {categoria.Category}</Text>
  </Card>
</View>

)
       } )
     }
      </ScrollView>

      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30
      }}>

        <Text style={{ fontSize: 22, color: "#181725", textAlign: "left", fontWeight: "500" }} > Extraviados </Text>
        <Text style={{ fontSize: 16, color: "#D1C900", textAlign: "right", fontWeight: "500" }} > Mostrar mas </Text>
      </View>


      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Image
          source={{ uri: 'https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg' }}
          style={{ width: 344, height: 195, borderRadius: 20 }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={{ marginLeft: 35, marginTop: 15 }}>
        <Text style={{ fontSize: 16, textAlign: "left", color: "#424242", fontWeight: "500" }} > Tommy </Text>
        <Text style={{ fontSize: 13, textAlign: "left", color: "#7E8389" }} > Perro • Golden Retriever </Text>
        <Text style={{ fontSize: 12, textAlign: "left", color: "#7E8389", fontWeight: "500" }} > Extraviado </Text>
      </View>

    </ScrollView>


  )
}

// HOJA DE ESTILOS 
const styles = StyleSheet.create({

  containerApp: {
    backgroundColor: "#FFFFFF",

  },
  listHeader: {
    height: 150,
    paddingTop: 0
  },

  cardCategories: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor:
      "#E7FFE4",
    width: 344,
    height: 124,
    borderRadius: 18,
    borderWidth: 0, // Remove Border
    shadowColor: 'rgba(0,0,0, 0.0)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  },

  cardCategories1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor:
      "#FED8D8",
    width: 344,
    height: 124,
    borderRadius: 18,
    borderWidth: 0, // Remove Border
    shadowColor: 'rgba(0,0,0, 0.0)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  }

});


export default HomeScreen