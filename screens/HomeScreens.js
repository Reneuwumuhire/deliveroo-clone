import {
	View,
	Text,
	SafeAreaView,
	Image,
	TextInput,
	ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
	AdjustmentsIcon,
	ChevronDownIcon,
	SearchIcon,
	UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreens = () => {
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);
	return (
		<SafeAreaView className="bg-white pt-5">
			{/* Header */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
				<Image
					source={{
						uri: "https://links.papareact.com/wru",
					}}
					className="w-7 h-7 bg-gray-300 rounded-full p-4"
				/>
				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
					<Text className="font-bold text-xl">
						Current Location
						<ChevronDownIcon size={20} color="#00CCBB" />
					</Text>
				</View>
				<UserIcon size={35} color="#00CCBB" />
			</View>
			{/* Search */}
			<View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
				<View className="flex-row space-x-2  bg-gray-200 rounded-xl p-3">
					<SearchIcon color="gray" size={20} />
					<TextInput
						placeholder="Restaurants and cuisines"
						keyboardType="default"
					/>
				</View>
				<AdjustmentsIcon color="#00CCBB" />
			</View>
			{/* Body */}
			<ScrollView>
				{/* Categories */}
				<Categories />
				{/* Featured rows */}
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreens;
