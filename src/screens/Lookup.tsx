import React, { useState, useEffect } from "react";
import API from "etherscan-api";
import { View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { ScreenView, Spinner } from "../components/";
import { Colors } from "../styling";
import { Button, Header, Text, Input } from "../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DETAILS } from "../constants/screens";
import { useIsFocused } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../navigation";
import { RouteProp } from "@react-navigation/native";
import { lookupStyles } from "../styling/screens/Lookup";

const api = API.init("5U232ARFN9ZJ74P4TH7G1ZFSPQJNJ49R4Q");

const Separator = () => <View style={{ height: 2 }} />;

export interface ITransaction {
  blockHash: string;
  blockNumber: number;
  confirmations: number;
  contractAddress: string;
  cumulativeGasUsed: number;
  from: string;
  gas: number;
  gasPrice: number;
  gasUsed: number;
  hash: string;
  input: string;
  isError: number;
  nonce: number;
  timeStamp: number;
  to: string;
  transactionIndex: number;
  txreceipt_status: number;
  value: number;
}

export const Lookup = ({ navigation, route }: { navigation: StackNavigationProp<MainStackParamList>; route: RouteProp<MainStackParamList, "Lookup"> }) => {
  const qrAddress = route?.params?.qrAddress;
  const isFocused = useIsFocused();
  const [address, setAddress] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setLoadingStatus] = useState(false);
  const switchLoadingStatus = (value: boolean) => setLoadingStatus(value);

  const onChange = (value: string) => setAddress(value);

  const onLookup = async (QRAddress?: string) => {
    switchLoadingStatus(true);
    if (transactions.length !== 0) {
      setTransactions([]);
    }
    api.account
      .txlist(QRAddress ? QRAddress : address, 1, "latest", 1, 100, "desc")
      .then((r: { result: [] }) => {
        setTransactions(r.result);
        switchLoadingStatus(false);
      })
      .catch((e: string) => {
        console.log(e);
        switchLoadingStatus(false);
      });
  };

  const renderItem = ({ item }: { item: ITransaction }) => {
    const onOpen = () => navigation.navigate(DETAILS, { transaction: item });
    return (
      <TouchableOpacity style={lookupStyles.listItem} onPress={onOpen} key={item.timeStamp}>
        <MaterialCommunityIcons name="transit-transfer" size={24} color={Colors.white} />
        <View style={lookupStyles.txtContainer}>
          <Text style={lookupStyles.value} bold>{`${item.value} ETH`}</Text>
          <Text style={lookupStyles.receiver}>{`To: ${item.to}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (qrAddress && qrAddress !== address && isFocused) {
      onChange(qrAddress);
      onLookup(qrAddress)
        .then(() => console.log("transactions were fetched"))
        .catch((e) => console.log(e));
    }
  }, [isFocused]);

  return (
    <ScreenView statusBarColor={Colors.black} navigationMenuColor={Colors.darkblue} barStyle="light-content">
      <Header title="Coinhouse Etherscan" />
      <ScrollView contentContainerStyle={lookupStyles.container} keyboardShouldPersistTaps="handled">
        <View style={lookupStyles.headerContainer}>
          <Text style={lookupStyles.txt}>Please enter a valid ethereum address:</Text>
          <View style={lookupStyles.input}>
            <Input onChangeText={onChange} value={address} placeholder="Ex: 0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91" />
          </View>
          <Button onPress={onLookup} title="Lookup" disabled={address.length === 0} />
        </View>
        {transactions.length > 0 && (
          <>
            <Text style={lookupStyles.title} bold>{`${transactions.length} MOST RECENT TRANSACTIONS`}</Text>
            <FlatList data={transactions} renderItem={renderItem} ItemSeparatorComponent={Separator} />
          </>
        )}
      </ScrollView>
      <Spinner visible={isLoading} />
    </ScreenView>
  );
};
