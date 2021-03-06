import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Header, ScreenView } from "../components";
import { Colors } from "../styling";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Text, Button } from "../components";
import { LOOKUP } from "../constants/screens";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../navigation";
import { qrscanStyles } from "../styling/screens/QRScan";


export const QRScan = ({ navigation }: { navigation: StackNavigationProp<MainStackParamList> }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [address, setAddress] = useState("");
  const onLookup = () => navigation.navigate(LOOKUP, { qrAddress: address });

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  });

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setAddress(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const onReScan = () => setAddress("");

  return (
    <ScreenView statusBarColor={Colors.black} navigationMenuColor={Colors.darkblue} barStyle="light-content">
      <Header title="QRScanner" />
      <View style={qrscanStyles.container}>
        {hasPermission === null && <Text>Permission for camera usage is required.</Text>}
        {hasPermission === false && <Text>No access to camera</Text>}
        {hasPermission && <BarCodeScanner onBarCodeScanned={address ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />}
      </View>
      <View>
        <Text style={qrscanStyles.address}>{`Address: ${address}`}</Text>
        <View style={qrscanStyles.buttonContainer}>
          <Button onPress={onReScan} title="Re:Scan" disabled={!address} />
          <Button onPress={onLookup} title="Lookup" disabled={!address} />
        </View>
      </View>
    </ScreenView>
  );
};
