import React, { Component } from 'react';
import {Text, StyleSheet, TouchableOpacity, Linking, View, Image} from 'react-native';
import behzad from '../Images/Behzad.jpeg';
const homestyle = require('./HomepageSTYLES');

class Homepage extends Component {
    render() {
        const url = "https://founditfound.com/";
        return (
            <View>
                <Text style={homestyle.homepagetitlefont}>Welcome to my resume app</Text>
                
                <TouchableOpacity style={homestyle.button} onPress={() => {Linking.openURL('https://behzadkhamneli-f19ba.web.app/')}}>
                    <Text style={homestyle.mywebsitefont}>My Website</Text>
                </TouchableOpacity>
                <View style={homestyle.behzadimage}>
                    <Image style={homestyle.imageradious} source={behzad}/>
                </View>
                <Text style={homestyle.bodystyle}>I am in my 4th year of studies towards a bachelor's degree in Computer Science</Text>
                <Text style={homestyle.bodystyle2}>You can find my projects on my github</Text>
            </View>
        );
    }
}

export default Homepage;