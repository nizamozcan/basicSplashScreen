import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  View,
  StyleSheet, Modal, ColorValue, ViewStyle
} from "react-native";

interface Props {
  second?: number;
  backgroundColor?: ColorValue;
  mainViewStyle?:ViewStyle
  children?:any
}

const SplashScreen = (props: Props) => {
  const { second, children,backgroundColor,mainViewStyle } = props;
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    fadeOut();
  }, []);
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: second * 1000,
      useNativeDriver: true
    }).start();
    setTimeout(() => {
      setVisible(false);
    }, second * 1000);
  };

  return (
    <Modal visible={visible} animationType={visible==false?"fade":"none"}>
      <View style={{ backgroundColor: backgroundColor, flex: 1 ,justifyContent:'center',...mainViewStyle}}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim
            }
          ]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({

  fadingContainer: {
   alignItems:'center'
  }

});

export default SplashScreen;
