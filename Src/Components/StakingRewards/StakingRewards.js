import { Icon } from 'native-base'
import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, SectionList, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import { connect } from 'react-redux'
import { normalize } from '../../../Util/constants'
import styles from './StakingRewards.styles'

const values = [
    {
        date: "3 June", wallet_name: "Wallet Name", balance: "Balance",
        data: [0, 1, 2, 3, 4, 5]
    },
    {
        date: "4 June", wallet_name: "Wallet Name", balance: "Balance",
        data: [0, 1, 2, 3, 4, 5]
    },
    {
        date: "5 June", wallet_name: "Wallet Name", balance: "Balance",
        data: [0, 1, 2, 3, 4, 5]
    }
].reverse()
class StakingRewards extends React.Component {
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
                        <Image style={[styles.HeaderIcon, { width: styles.HeaderIcon.fontSize - 6, height: styles.HeaderIcon.fontSize }]} source={require('../../../Design/Images/lock_open.png')} />
                        {/* <Icon name="unlock" type="Feather" style={[styles.HeaderIcon]} /> */}
                        <Image style={[styles.HeaderIcon, { width: styles.HeaderIcon.fontSize, height: styles.HeaderIcon.fontSize }]} source={require('../../../Design/Images/Piggybank_orange.png')} />
                        {/* <Icon name="piggy-bank" type="FontAwesome5" style={[styles.HeaderIcon, { color: 'rgb(224,78,4)' }]} /> */}
                        <Icon name="wifi" type="FontAwesome" style={[styles.HeaderIcon, { color: 'rgb(255,127,0)' }]} />
                        <Icon name="check" type="FontAwesome" style={[styles.HeaderIcon, { color: 'rgb(115,255,107)' }]} />
                    </View>
                    <View style={styles.MainView}>
                        <View style={{ flex: 1.5, borderColor: 'white', borderWidth: 0, flexDirection: 'row', marginHorizontal: 15 }}>
                            <View style={{ flex: 1, borderWidth: 0, borderColor: 'white', paddingLeft: 10, }}>
                                <Text style={{ fontSize: normalize(13), color: 'rgb(126,126,126)' }}>Time Period</Text>
                                <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                    <Text style={{ fontSize: normalize(12), color: 'white' }}>This Week</Text>
                                    <Icon name="caretdown" type="AntDesign" style={{ fontSize: normalize(12), color: 'white', marginLeft: 10 }} />
                                </View>
                                {/* <Text style={{ fontSize: normalize(14), color: 'white' }}>Time Period</Text> */}
                            </View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: normalize(13), color: 'rgb(126,126,126)' }}>Total Rewards</Text>
                                <Text style={{ fontSize: normalize(16), color: 'white', marginTop: 10 }}>~16340,40 USD</Text>
                                <Text style={{ fontSize: normalize(13), color: 'rgb(126,126,126)', marginTop: 10 }}>1634,40 EUR</Text>
                            </View>
                        </View>
                        <View style={{ flex: 11, borderWidth: 0, borderColor: 'white', marginTop: 10, justifyContent: 'space-between', marginHorizontal: 5, }}>
                            <SectionList
                                sections={values}
                                renderItem={({ item }) => {
                                    console.log(item)
                                    return (
                                        <TouchableOpacity onPress={() => { }} style={{ flex: 1, marginVertical: 10, borderBottomColor: 'white', borderBottomWidth: 0, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, }}>
                                            <Image style={{ width: normalize(24,), height: normalize(24), marginHorizontal: 15 }} source={require('../../../Design/Images/Piggybank_orange.png')} />
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
                                        </TouchableOpacity>
                                    )
                                }}
                                renderSectionHeader={({ section }) => {
                                    // console.log(section)
                                    return (
                                        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', paddingLeft: 25, paddingRight: 15, }}>
                                            <Text style={{ flex: 1, color: 'rgb(126,126,126)' }}>{section.date}</Text>
                                            <Text style={{ flex: 2, color: 'rgb(126,126,126)' }}>{section.wallet_name}</Text>
                                            <Text style={{ flex: 1, color: 'rgb(126,126,126)', textAlign: 'right' }}>{section.balance}</Text>
                                        </View>
                                    )
                                }}
                                stickySectionHeadersEnabled={false}
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
export default connect(mapStateToProps, mapDispatchToProps)(StakingRewards)