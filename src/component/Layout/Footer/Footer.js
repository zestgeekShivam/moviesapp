import { View, Dimensions, StyleSheet, Text, sv } from 'react-native'
import React from 'react';
import Instagram from './social/Instagram.svg';
import Facebook from './social/Facebook.svg';
import Twitter from './social/Twitter.svg';
import AppStore from './store/appStore.svg';
import PlayStore from './store/playStore.svg';
import WindowsStore from './store/windowsStore.svg'


const { width, height } = Dimensions.get('window')
const Footer = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.footerText} > Home | Terms and Conditions | Privacy Policy  | Collection Statement </Text>
            <Text style={styles.footerText} >  Help | Manage Account </Text>
            <Text style={styles.footerText2} > Copyright @ 2016 DEMO Streaming. All Right Reserved.  </Text>
            <View style={styles.logoContainer} >
                <View style={styles.iconContainer} >
                    <Instagram width={20} height={20} />
                    <Facebook width={20} height={20} />
                    <Twitter width={20} height={20} />
                </View>
                <View style={styles.storeContainer} >
                    <AppStore width={50} height={20} />
                    <PlayStore width={50} height={20} />
                    <WindowsStore width={50} height={20} />
                </View>
                <View>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: width,
        backgroundColor: '#2f3542',
        color: 'white',
        height: height / 7,
        textAlign: 'center',
    },
    footerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 10,
        marginTop: 5
    },
    footerText2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 7,
        marginTop: 7
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',

    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-around',
        marginTop: 20
    },
    storeContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-around',
        marginTop: 20,
        marginRight: 20,
    },
});

export default Footer