import { Dimensions, Platform, StyleSheet } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'
import { normalize } from '../../../Util/constants'
const { width, height } = Dimensions.get("window")
const styles = StyleSheet.create({
    Header: {
        height: Platform.OS === "ios" ? normalize(60) + initialWindowMetrics.insets.top : normalize(60),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        width: '100%',
        paddingTop: Platform.OS === "ios" ? initialWindowMetrics.insets.top : 0,
        // borderWidth: 1,
        borderColor: 'white',
    },
    HeaderLogoText: {
        fontSize: normalize(14),
        flex: 1,
        color: 'rgb(126,126,126)',
        fontWeight: "500"
    },
    HeaderIcon: {
        fontSize: normalize(18),
        marginHorizontal: normalize(8),
    },
    MainView: {
        flex: 1
    },
    Footer: {
        height: Platform.OS === "ios" ? normalize(60) + initialWindowMetrics.insets.bottom : normalize(60),
        // borderWidth: 1,
        borderColor: 'white',
        paddingBottom: Platform.OS === "ios" ? initialWindowMetrics.insets.bottom : 0,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    FooterIcon: {
        fontSize: normalize(35),
        color: 'white',
    }
})
export default styles