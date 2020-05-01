import React from "react";
import {StyleSheet} from "react-native";
import {Headline} from "react-native-paper";
import PropTypes from "prop-types";

/**
 * @param props
 * @returns {*}
 * @constructor
 */
function ShadowHeadline(props){
    return (
        <Headline {...props} style={[props.style, styles.shadow]}>
            {props.children}
        </Headline>
    )
}

const styles = StyleSheet.create({
    shadow : {
        textShadowColor: '#0000003D',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    }
});

export default ShadowHeadline;