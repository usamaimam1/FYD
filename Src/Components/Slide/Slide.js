import React from 'react'
import { View, Text, Image, ImageBackground, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import SwiperFlatList from 'react-native-swiper-flatlist'
import { normalize } from '../../../Util/constants'
import { Icon } from 'native-base'

const data = [
    { id: 1, name: "Wallets", description: "To send and receive FYDcoin you have to create an address first", icon: require('../../../Design/Images/wallet.png'), iconName: "wallet", iconType: "SimpleLineIcons" },
    { id: 2, name: "Transactions", description: "You can send and receive FYD without an account or registration", icon: require('../../../Design/Images/transactions.png'), iconName: "exchange-alt", iconType: "FontAwesome5" },
    { id: 3, name: "Stalking", description: "By holding your coins in your wallet you will receive staking rewards", icon: require('../../../Design/Images/stalking.png'), iconName: "piggy-bank", iconType: "FontAwesome5" },
]
class Slide extends React.Component {
    constructor(props) {
        super(props)
        this.renderSlide = this.renderSlide.bind(this)
    }
    componentDidMount() {

    }
    renderSlide(slide) {
        const { item, index, separator } = slide
        return (
            <TouchableWithoutFeedback onPress={() => { item.id === 3 ? this.props.navigation.navigate('MainScreen') : this.list.scrollToIndex({ index: index + 1, animated: true, }) }}>
                <View style={{ height: Dimensions.get("window").height, width: Dimensions.get("window").width, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={item.iconName} type={item.iconType} style={{ fontSize: normalize(200), color: "white" }} />
                    {/* <Image style={{ width: normalize(200), height: normalize(190) }} source={item.icon} /> */}
                    <Text style={{ fontSize: normalize(18), color: 'white', marginVertical: 15, }}>{item.name}</Text>
                    <Text style={{ fontSize: normalize(15), color: 'rgb(126,126,126)', marginVertical: 15, marginHorizontal: 25, textAlign: 'center', lineHeight: normalize(35), }}>{item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    render() {
        return (
            <View style={{ backgroundColor: 'rgb(30,30,30)', flex: 1 }}>
                <ImageBackground style={{ flex: 1 }} source={require('../../../Design/Images/Background.png')}>
                    <SwiperFlatList
                        ref={c => this.list = c}
                        data={data}
                        renderItem={this.renderSlide}
                        showPagination
                        paginationStyle={{ marginBottom: normalize(50), width: normalize(120), alignSelf: 'center', justifyContent: 'space-between' }}
                        paginationStyleItem={{}}
                    />
                </ImageBackground>
            </View>
        )
    }
}
const mapStateToProps = null
const mapDispatchToProps = null
export default connect(mapStateToProps, mapDispatchToProps)(Slide)