import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Headline, Paragraph, Subheading, Surface, Title} from "react-native-paper";
import {DefaultScrollView} from "../../components/containers";
import {Backgrounds, Zodiac} from "../../svgs";
import {useGlobals} from "../../contexts/Global";
import {ThemeUtils} from "../../utils";
import {Sign} from "../../components/zodiac";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import {useIsDark} from "../../hooks/useTheme";
import i18n from "i18n-js";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function DailyScreen({navigation}) {
    return (
        <React.Fragment>
            <DefaultScrollView barStyle={useIsDark() ? 'light-content' : 'dark-content'}>
                <Backgrounds.Stars style={styles.backgroundStars}/>
                <View style={styles.headerContainer}>
                    <Sign sign="Aquarius" showTitle={false} signWidth={80} signHeight={80}/>
                    <ShadowHeadline style={styles.headerHeadline}>
                        {i18n.t('Aquarius')}
                    </ShadowHeadline>
                    <Subheading>
                        Wednesday, 29 april, 2020
                    </Subheading>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button icon="heart" style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Love')}</Button>
                        <Paragraph style={styles.surfaceParagraph}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source
                        </Paragraph>
                    </Surface>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button icon="briefcase" style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Work')}</Button>
                        <Paragraph style={styles.surfaceParagraph}>
                            It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source
                        </Paragraph>
                    </Surface>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button icon="food-apple" style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Health')}</Button>
                        <Paragraph style={styles.surfaceParagraph}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia.
                        </Paragraph>
                    </Surface>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Today you love')}</Button>
                        <View style={styles.bottomThreeContainer}>
                            <Sign sign={'Scorpio'} signHeight={100} styleTitle={{fontSize: 20, marginTop: 15}}/>
                            <Sign sign={'Taurus'} signHeight={100} styleTitle={{fontSize: 20, marginTop: 15}}/>
                        </View>
                    </Surface>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Today you hate')}</Button>
                        <View style={styles.bottomThreeContainer}>
                            <Sign sign={'Libra'} signHeight={100} styleTitle={{fontSize: 20, marginTop: 15}}/>
                            <Sign sign={'Leo'} signHeight={100} styleTitle={{fontSize: 20, marginTop: 15}}/>
                        </View>
                    </Surface>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Lucky numbers')}</Button>
                        <View style={styles.bottomThreeContainer}>
                            <View style={{alignItems: 'center'}}>
                                <Title style={{fontSize: 26}}>25</Title>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Title style={{fontSize: 26}}>6</Title>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Title style={{fontSize: 26}}>32</Title>
                            </View>
                        </View>
                    </Surface>
                </View>
                <View style={{height: 20}}/>
            </DefaultScrollView>
        </React.Fragment>

    );
}

const styles = StyleSheet.create({
    backgroundStars: {
        zIndex: 1, position: 'absolute', top: 20, right: 20, opacity: 0.15
    },
    headerContainer: {
        alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, marginVertical: 20
    },
    headerHeadline: {
        fontWeight: 'bold', fontSize: 30, lineHeight: 34, marginTop: 10
    },
    surfaceContainer: {
        marginTop: 20, marginHorizontal: 20
    },
    surfaceSurface: {
        padding: 20, borderRadius: 10, elevation: 3
    },
    surfaceButton: {
        marginTop: -5, marginBottom: 10
    },
    surfaceButtonLabel: {
        fontSize: 20, fontWeight: 'bold', letterSpacing: 4
    },
    surfaceParagraph: {
        fontSize: 14, lineHeight: 22, letterSpacing: 1,
    },
    bottomThreeContainer: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
})


export default DailyScreen;