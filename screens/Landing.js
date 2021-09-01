import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Dimensions } from 'react-native';
import { ListItem, Avatar, Header, SearchBar, Image, Card, Button, Icon, Chip } from 'react-native-elements';
import landingImage from "../assets/LandingPage.jpeg"
import adoptappLogo from "../assets/icon.png"

const win = Dimensions.get('window');


const Landing = (props) => {
    return (
        <ScrollView style={styles.containerApp} showsVerticalScrollIndicator={false} horizontal={false}>

            <Image
                source={landingImage}
                style={{
                    width: win.width,
                    height: win.height
                }} />

            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center' }}>
            <Card containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                backgroundColor: 'rgba(159, 157, 157, 0.65)',
                width: 423,
                height: 293,
                borderRadius: 18,
                borderWidth: 0, // Remove Border
                shadowColor: 'rgba(0,0,0, 0.0)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 0,
                shadowRadius: 0,
                elevation: 0 
            }}>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        source={adoptappLogo}
                        style={{
                            width: 60,
                            height: 60,
                        }}

                    />
                </View>
                <Text style={{ marginTop: 20, fontSize: 18, textAlign: "center", color: "#212121", fontWeight: "600", letterSpacing: -1 }}> Localiza y brinda un mejor futuro a tu animalito favorito </Text>
                <Button
                onPress={() => props.navigation.navigate('LandingPhone')}
                    title="Comenzar"
                    type="solid"
                    buttonStyle={{ backgroundColor: "#F7F395", height: 55, width: 270, borderRadius: 18 }}
                    containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    titleStyle={{ fontSize: 18, color: "#212121", fontWeight: "500", letterSpacing: -1 }}
                />
            </Card>
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

export default Landing