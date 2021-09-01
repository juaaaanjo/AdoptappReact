import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { ListItem, Avatar, Header, SearchBar, Image, Card, Button, Icon, Chip } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import firebase from '../database/firebase'

const DetailsScreen = (props) => {

  const initialState = {
    id: '',
    Age: '',
    Breed: '',
    Category: '',
    Image: '',
    Info: '',
    Name: '',
    Place: '',
    Type: '',
    typeAge: '',
    
  }

  const [post, setPost] = useState(initialState)

  const [loading, setLoading] = useState(true)

  const getPostById = async (id) => {
    const dbRef = firebase.db.collection('Animalitos').doc(id)
    const doc = await dbRef.get();
    const post = doc.data();
    setPost({
      ...post,
      id: doc.id,
    });
    setLoading(false)
  };

  useEffect(() => {
    getPostById(props.route.params.postID);
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
          { flex: 50 }
        }
        rightContainerStyle={
          { flex: 50 }
        }
        rightComponent={
          <View>
            <Text style={{ fontSize: 14, color: "#DF3434", fontWeight: "600", marginTop: 5, letterSpacing: -1 }} > Reportar </Text>

          </View>
        }
      />
      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 70,
        marginLeft: 70,
        marginTop: 20
      }}>
        <Chip
          title={post.Category}
          containerStyle={styles.chipsCards}
          buttonStyle={{ backgroundColor: '#F2F2F2' }}
          titleStyle={{ color: '#7E8389', fontWeight: "700", letterSpacing: -1 }}
        />
        <Chip
          title={
            <Text style={{ color: '#7E8389', fontWeight: "700", letterSpacing: -1 }}>{post.Age} {post.typeAge}</Text>
          }
          containerStyle={styles.chipsCards}
          buttonStyle={{ backgroundColor: '#F2F2F2' }}
          titleStyle={{ color: '#7E8389', fontWeight: "700", letterSpacing: -1 }}
        />
      </View>

      <ScrollView horizontal={true}
        decelerationRate={"normal"} showsHorizontalScrollIndicator={false} bounces={false} scrollEventThrottle={12} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 15, flexGrow: 1, }}>


        <Image
          source={{ uri: post.Image}}
          style={{ width: 344, height: 195, borderRadius: 20, marginHorizontal: 30 }}
          PlaceholderContent={<ActivityIndicator />}
        />

        <Image
          source={{ uri: 'https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg' }}
          style={{ width: 344, height: 195, borderRadius: 20, marginHorizontal: 30 }}
          PlaceholderContent={<ActivityIndicator />}
        />

      </ScrollView>

      <View style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginRight: 40,
        marginLeft: 40,
        marginTop: 20
      }}>

        <Avatar style={{ width: 34, height: 34, marginTop: 3, marginRight: 10 }} source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} rounded />

        <View style={{ flex: 50 }}>
          <Text style={{ fontSize: 20, textAlign: "left", color: "#424242", fontWeight: "500", letterSpacing: -1 }} > Camilo </Text>
          <Text style={{ fontSize: 15, textAlign: "left", color: "#7E8389", letterSpacing: -1 }} > 3112890065 </Text>
        </View>

        <Chip
          title="Dueño"
          containerStyle={styles.chipCardProfile}
          buttonStyle={{ backgroundColor: '#F2F2F2', marginTop: 3 }}
          titleStyle={{ color: '#7E8389', fontWeight: "700", letterSpacing: -1 }}
        />

      </View>

      <View style={{
        flex: 50, marginLeft: 40,
        marginTop: 20
      }}>
        <Text style={{ fontSize: 20, textAlign: "left", color: "#7E8389", fontWeight: "700", letterSpacing: -1 }} > {post.Type} </Text>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginRight: 70,
        }}>
          <Text style={{ fontSize: 20, textAlign: "left", color: "#7E8389", fontWeight: "700", letterSpacing: -1 }} > Enfermedades: </Text>
          <Text style={{ fontSize: 20, textAlign: "left", color: "#7E8389", letterSpacing: -1 }} > Ninguna </Text>
        </View>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        <Card containerStyle={{
          justifyContent: 'left',
          alignItems: 'left',
          marginTop: 20,
          backgroundColor: '#F2F3F2',
          width: 333,
          height: 196,
          borderRadius: 18,
          borderWidth: 0, // Remove Border
          shadowColor: 'rgba(0,0,0, 0.0)',
          shadowOffset: { height: 0, width: 0 },
          shadowOpacity: 0,
          shadowRadius: 0,
          elevation: 0
        }}>



          <Text style={{ fontSize: 26, textAlign: "left", color: "#030303", fontWeight: "600", letterSpacing: -1 }}> {post.Name}</Text>
          <Text style={{ fontSize: 16, marginTop: 10, textAlign: "left", color: "#7C7C7C", fontWeight: "400", letterSpacing: -1 }}>{post.Info}</Text>
        </Card>
      </View>

      <Button
        title="Contactar Dueño"
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

  chipsCards: {
    height: 40,
    width: 98,
  },

  chipCardProfile: {
    height: 40,
    width: 88,
  }


});

export default DetailsScreen