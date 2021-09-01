import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TextInput, ActivityIndicator, Alert } from 'react-native'
import { ListItem, Avatar, Header, SearchBar, Image, Card, Button, Icon, Chip } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import firebase from '../database/firebase'
import { Col, Row, Grid } from "react-native-easy-grid";
import adoptappIcon from "../assets/icon.png"

const CategoriesScreen = (props) => {

  //Getting Category
  const initialState = {
    id: '',
    Category: '',
  }

  const [category, setCategory] = useState(initialState)
  const [loading, setLoading] = useState(true)

  const [posts, setPosts] = useState([])


  useEffect(() => {


    const getCategoryById = async (id) => {
      const dbRef = firebase.db.collection('Categorias').doc(id)
      const doc = await dbRef.get();
      const category = doc.data();
      setCategory({
        ...category,
        id: doc.id,
      });
      setLoading(false)


    };

    getCategoryById(props.route.params.categoriaID);
    const aux = props.route.params.categoriaName
    const posts = [];

    firebase.db.collection('Animalitos').where('Category', '==', aux).onSnapshot(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        const { Age, Breed, Category, Image, Info, Name, Place, Type, typeAge } = doc.data()
        posts.push({
          id: doc.id,
          Age, Breed, Category, Image, Info, Name, Place, Type, typeAge
        })
      });
      setPosts(posts)

    });
  }, [])


  return (
    <ScrollView style={styles.containerApp} showsVerticalScrollIndicator={false} horizontal={false}>
      <Header
        backgroundColor="#FFFFFF"
        leftComponent={
          <View>
            <Ionicons onPress={() => props.navigation.navigate('Home')} name="chevron-back" size={24} color="black" />
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
        <Text style={{ fontSize: 26, textAlign: "left", color: "#030303", fontWeight: "700", letterSpacing: -1 }} > {category.Category} </Text>
      </View>

      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 25,
        marginTop: 20
      }}>
        <View>
          <View style={{ justifyContent: 'left', alignItems: 'left', marginTop: 20 }}>
            <Image
              source={{ uri: 'https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg' }}
              style={{ width: 173, height: 222, borderRadius: 20 }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 10, textAlign: "left", color: "#767676", fontWeight: "700" }} > PERRO • GOLDEN RETRIEVER </Text>
            <Text style={{ fontSize: 16, textAlign: "left", color: "#484848", fontWeight: "700" }} >Martin </Text>
            <Text style={{ fontSize: 14, textAlign: "left", color: "#7E8389", fontWeight: "500" }} >Titan Plaza </Text>
            <Text style={{ fontSize: 12, textAlign: "left", color: "#D1C900", fontWeight: "500" }} >Extraviado </Text>
          </View>
        </View>

        <View >
          <View style={{ justifyContent: 'left', alignItems: 'left', marginTop: 20, marginLeft: 20 }}>
            <Image
              source={{ uri: 'https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg' }}
              style={{ width: 173, height: 222, borderRadius: 20 }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={{ marginLeft: 20, marginTop: 15 }}>
            <Text style={{ fontSize: 10, textAlign: "left", color: "#767676", fontWeight: "700" }} > PERRO • GOLDEN RETRIEVER </Text>
            <Text style={{ fontSize: 16, textAlign: "left", color: "#484848", fontWeight: "700" }} >Martin </Text>
            <Text style={{ fontSize: 14, textAlign: "left", color: "#7E8389", fontWeight: "500" }} >Titan Plaza </Text>
            <Text style={{ fontSize: 12, textAlign: "left", color: "#D1C900", fontWeight: "500" }} >Extraviado </Text>
          </View>
        </View>
      </View>


      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <Image
                source={{ uri: item.Image }}
                style={{ width: 173, height: 222, borderRadius: 20 }}
                PlaceholderContent={
                  <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Card containerStyle={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 20,
                      backgroundColor: '#F2F3F2',
                      width: 173,
                      height: 222,
                      borderRadius: 20,
                      borderWidth: 0, // Remove Border
                      shadowColor: 'rgba(0,0,0, 0.0)',
                      shadowOffset: { height: 0, width: 0 },
                      shadowOpacity: 0,
                      shadowRadius: 0,
                      elevation: 0
                    }}>

                      <Image
                        style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }} source={adoptappIcon} />

                    </Card>
                  </View>
                }
                onPress={() => props.navigation.navigate('Details', {
                  postID: item.id
                })}
              />
              <View style={{ marginLeft: 10, marginTop: 15 }}>
                <Text style={{ fontSize: 10, textAlign: "left", color: "#767676", fontWeight: "700" }} >{item.Category}• {item.Breed} </Text>
                <Text style={{ fontSize: 16, textAlign: "left", color: "#484848", fontWeight: "700" }} >{item.Name} </Text>
                <Text style={{ fontSize: 14, textAlign: "left", color: "#7E8389", fontWeight: "500" }} >{item.Place} </Text>
                <Text style={{ fontSize: 12, textAlign: "left", color: "#D1C900", fontWeight: "500" }} >{item.Type}</Text>
              </View>
            </View>
            )}
        }
        numColumns={2}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 20 }}

      />



    </ScrollView>
  )
}


// HOJA DE ESTILOS 
const styles = StyleSheet.create({

  containerApp: {
    backgroundColor: "#FFFFFF",
  }

});

export default CategoriesScreen