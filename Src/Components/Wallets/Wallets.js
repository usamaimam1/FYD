import { Icon } from 'native-base'
import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import { connect } from 'react-redux'
import { normalize } from '../../../Util/constants'
import styles from './Wallets.styles'
class WalletsScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: 'rgb(30,30,30)' }}>
                <ImageBackground style={{ flex: 1, }} source={require('../../../Design/Images/Background.png')}>
                    <View style={styles.Header}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ width: normalize(25), height: normalize(25), justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="keyboard-backspace" type="MaterialIcons" style={{ fontSize: normalize(20), color: 'white' }} />
                            </TouchableOpacity>
                        </View>
                        {/* <Text style={styles.HeaderLogoText}>FYD</Text> */}
                        <Icon name="unlock" type="Feather" style={[styles.HeaderIcon]} />
                        <Icon name="piggy-bank" type="FontAwesome5" style={[styles.HeaderIcon, { color: 'rgb(224,78,4)' }]} />
                        <Icon name="wifi" type="FontAwesome" style={[styles.HeaderIcon, { color: 'rgb(255,127,0)' }]} />
                        <Icon name="check" type="FontAwesome" style={[styles.HeaderIcon, { color: 'rgb(115,255,107)' }]} />
                    </View>
                    <View style={styles.MainView}>
                        <View style={{ flex: 1, borderWidth: 0, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                                <Text style={{ fontSize: normalize(24), color: 'white' }}>27395,40 FYD</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 15, }}>
                                <Text style={{ fontSize: normalize(16), color: 'rgb(126,126,126)' }}>~16340,40 USD</Text>
                            </View>
                        </View>
                        <View style={{ flex: 4, borderWidth: 0, borderColor: 'white', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 5, }}>
                            <FlatList
                                data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                                renderItem={({ item, index, separator }) =>
                                    <TouchableOpacity onPress={() => { }} style={{ flex: 1, marginVertical: 10, borderBottomColor: 'white', borderBottomWidth: 0, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, }}>
                                        <Icon name="wallet" type="AntDesign" style={{ fontSize: normalize(22), color: 'white', paddingHorizontal: 15, borderWidth: 0, borderColor: 'white' }} />
                                        <View style={{ flex: 1, justifyContent: 'center', borderBottomWidth: 0.4, borderBottomColor: 'rgb(126,126,126)', paddingVertical: 12, marginLeft: 20, }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text numberOfLines={1} style={{ flex: 1, color: 'white', fontSize: normalize(14) }}>General Address</Text>
                                                <Text style={{ color: 'white', fontSize: normalize(12) }}>780 FYD</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text numberOfLines={1} style={{ flex: 1, color: 'rgb(126,126,126)', fontSize: normalize(12), marginTop: 6, }}>fhksdhakjsdakjsdaksdjsks</Text>
                                                <Text numberOfLines={1} style={{ color: 'rgb(126,126,126)', fontSize: normalize(10), marginTop: 6, }}>100 EUR</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>}
                            />
                        </View>
                    </View>
                    {/* <View style={styles.Footer}>
                        <Icon name="download" type="AntDesign" style={styles.FooterIcon} />
                        <Icon name="scan1" type="AntDesign" style={styles.FooterIcon} />
                        <Icon name="upload" type="AntDesign" style={styles.FooterIcon} />
                    </View> */}
                </ImageBackground>
            </View>
        )
    }
}
const mapStateToProps = null
const mapDispatchToProps = null
export default connect(mapStateToProps, mapDispatchToProps)(WalletsScreen)