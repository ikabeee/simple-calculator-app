import { useLocalSearchParams, useRouter } from "expo-router"
import { View, Button, Text } from "react-native";

export default function Multiplication() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { firstNumber, secondNumber } = params;
    const result = (firstNumber: string, secondNumber: string): string => {
        const first = parseInt(firstNumber);
        const second = parseInt(secondNumber);
        return (first * second).toString();
    }
    return (
        <View>
            <Text>El resultado es: {!firstNumber || !secondNumber ? `No recibí todos los numeros` : result(firstNumber as string, secondNumber as string)}</Text>
            <Button title ="Inicio" onPress={()=>router.back()}/>
        </View>
    )
}