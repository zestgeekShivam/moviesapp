import { View, Text, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateNav } from '../../../redux/slice/navSlice'
import { useRoute } from '@react-navigation/native'
const Home = ({ navigation }) => {

    const dispatch = useDispatch()
    const route = useRoute()
    const movies = () => {
        navigation.navigate('Movies');
        dispatch(updateNav('Movies'))
    }
    const series = () => {
        navigation.navigate('Series');
        dispatch(updateNav('Series'))
    }

    // useEffect(() => {

    //     console.log('rendered')
    // })
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} >
            <Pressable onPress={movies}  >
                <Image
                    source={require('./Holder.png')}
                    style={{ width: 100, height: 150, }}
                />
                <Text style={{ marginTop: 10 }} > Popular Movies </Text>
            </Pressable>
            <Pressable onPress={series} >
                <Image
                    source={require('./Holder.png')}
                    style={{ width: 100, height: 150, }}
                />
                <Text style={{ marginTop: 10 }} > Popular Series </Text>
            </Pressable>
        </View>
    )
}

export default Home