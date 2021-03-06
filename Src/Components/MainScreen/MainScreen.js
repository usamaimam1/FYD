import { Icon } from 'native-base'
import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { color } from 'react-native-reanimated'
import { connect } from 'react-redux'
import { normalize } from '../../../Util/constants'
import styles from './MainScreen.styles'
class MainScreen extends React.Component {
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
                        <View style={{ flex: 1 }}>
                            <Image source={require('../../../Design/Images/Splash_logo.png')} style={{ width: 25 * 2.522, height: 25 }} />
                        </View>
                        <Image style={[styles.HeaderIcon, { width: styles.HeaderIcon.fontSize - 6, height: styles.HeaderIcon.fontSize }]} source={require('../../../Design/Images/lock_open.png')} />
                        <Image style={[styles.HeaderIcon, { width: styles.HeaderIcon.fontSize, height: styles.HeaderIcon.fontSize }]} source={require('../../../Design/Images/Piggybank_orange.png')} />
                        {/* <Icon name="piggy-bank" type="FontAwesome5" style={[styles.HeaderIcon, { color: 'rgb(224,78,4)' }]} /> */}
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
                        <View style={{ flex: 2, borderWidth: 0, borderColor: 'white', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 5, }}>
                            <TouchableOpacity onPress={() => { navigation.navigate('WalletsScreen') }} style={{ flex: 1, marginVertical: 10, borderBottomColor: 'white', borderBottomWidth: 0, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, }}>
                                <Image source={require('../../../Design/Images/wallet_slide.png')} style={{ width: normalize(23), height: normalize(20), marginHorizontal: 16, borderWidth: 0, borderColor: 'white' }} />
                                <View style={{ flex: 1, justifyContent: 'center', borderBottomWidth: 0.4, borderBottomColor: 'rgb(126,126,126)', paddingVertical: 12, marginLeft: 20, }}>
                                    <Text style={{ color: 'white', fontSize: normalize(14) }}>Wallets</Text>
                                    <Text style={{ color: 'rgb(126,126,126)', fontSize: normalize(12), marginTop: 6, }}>Overview of all your wallets</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, marginVertical: 10, borderBottomColor: 'white', borderBottomWidth: 0, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, }}>
                                <Image source={require('../../../Design/Images/Create_wallet.png')} style={{ width: normalize(28), height: normalize(22), marginHorizontal: 13, borderWidth: 0, borderColor: 'white' }} />
                                <View style={{ flex: 1, justifyContent: 'center', borderBottomWidth: 0.4, borderBottomColor: 'rgb(126,126,126)', paddingVertical: 12, marginLeft: 20, }}>
                                    <Text style={{ color: 'white', fontSize: normalize(14) }}>Create Wallet</Text>
                                    <Text style={{ color: 'rgb(126,126,126)', fontSize: normalize(12), marginTop: 6, }}>Create A New Wallet</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 1, marginVertical: 10, borderBottomColor: 'white', borderBottomWidth: 0, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, }}>
                                <Image source={require('../../../Design/Images/exchange_slide.png')} style={{ width: normalize(23), height: normalize(20), marginHorizontal: 16, borderWidth: 0, borderColor: 'white' }} />
                                <View style={{ flex: 1, justifyContent: 'center', borderBottomWidth: 0.4, borderBottomColor: 'rgb(126,126,126)', paddingVertical: 12, marginLeft: 20, }}>
                                    <Text style={{ color: 'white', fontSize: normalize(14) }}>Transactions</Text>
                                    <Text style={{ color: 'rgb(126,126,126)', fontSize: normalize(12), marginTop: 6, }}>View All Your Transactions</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('StakingRewards') }} style={{ flex: 1, marginVertical: 10, borderBottomColor: 'white', borderBottomWidth: 0, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, }}>
                                <Image source={require('../../../Design/Images/Piggybank_orange.png')} style={{ width: normalize(25), height: normalize(25), marginHorizontal: 15, borderWidth: 0, borderColor: 'white' }} />
                                <View style={{ flex: 1, justifyContent: 'center', borderBottomWidth: 0.4, borderBottomColor: 'rgb(126,126,126)', paddingVertical: 12, marginLeft: 20, }}>
                                    <Text style={{ color: 'white', fontSize: normalize(14) }}>Staking Rewards</Text>
                                    <Text style={{ color: 'rgb(126,126,126)', fontSize: normalize(12), marginTop: 6, }}>Overview of all your rewards</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.Footer}>
                        <Image source={require('../../../Design/Images/Receive.png')} style={{ width: normalize(25), height: normalize(32), }} />
                        <Image source={require('../../../Design/Images/Scanner.png')} style={{ width: normalize(30), height: normalize(32), }} />
                        <Image source={require('../../../Design/Images/Send.png')} style={{ width: normalize(25), height: normalize(32), }} />
                        {/* <Icon name="download" type="AntDesign" style={styles.FooterIcon} /> */}
                        {/* <Icon name="scan1" type="AntDesign" style={styles.FooterIcon} /> */}
                        {/* <Icon name="upload" type="AntDesign" style={styles.FooterIcon} /> */}
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const mapStateToProps = null
const mapDispatchToProps = null
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)