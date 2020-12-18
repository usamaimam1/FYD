import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { normalize } from '../../../Util/constants'
import Ticker from 'react-native-ticker'
class SplashScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
        }
    }
    componentDidMount() {
        const interval = 5
        this.handle = setInterval(() => {
            const { number } = this.state
            this.setState({ number: this.state.number + interval })
            if (number + interval === 100) {
                clearInterval(this.handle)
            }
        }, 250)
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'rgb(30,30,30)' }}>
                <ImageBackground style={{ flex: 1 }} source={require('../../../Design/Images/Background.png')}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: normalize(60), color: 'rgb(126,126,126)', fontWeight: "500" }}>FYD</Text>
                    </View>
                    <View style={{ height: 80, marginVertical: 23, }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Ticker textStyle={{ fontSize: normalize(14), color: 'rgb(126,126,126)' }}>
                                {this.state.number}
                            </Ticker>
                            {/* <Text style={{ fontSize: normalize(15), color: 'rgb(126,126,126)' }}>99%</Text> */}
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: normalize(15), color: 'rgb(255,255,255)' }}>Mobile Version v1.0</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}
const mapStateToProps = null
const mapDispatchToProps = null
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)