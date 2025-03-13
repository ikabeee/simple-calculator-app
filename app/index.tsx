import { useRouter } from "expo-router"
import { useState } from "react";
import { Button, TextInput, View } from "react-native";


export default function Calculator() {
    const router = useRouter();
    const [form, setForm] = useState({
        firstNumber: "",
        secondNumber: "",
    });

    const handleForm = (data: object) => {
        setForm((prev) => ({ ...prev, ...data }))
    }
    
    return (
        <View>
            <TextInput placeholder="Ingresa un numero" value={form.firstNumber} onChangeText={((number) => handleForm({firstNumber: number,}))} />
            <TextInput placeholder="Ingresa otro numero" value={form.secondNumber.toString()} onChangeText={((number) => handleForm({secondNumber: number}))} />
            <Button title="Suma" onPress={()=>router.push({
                pathname: "./addition",
                params: form,
            })}/>
            <Button title="Resta" onPress={()=>router.push({
                pathname: "./subtract",
                params: form,
            })}/>
            <Button title="Multiplicación" onPress={()=>router.push({
                pathname: "./multiplication",
                params: form,
            })}/>
            <Button title="División" onPress={()=>router.push({
                pathname: "./division",
                params: form,
            })}/>
        </View>
    )
}