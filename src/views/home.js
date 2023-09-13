import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getTodayRemedio, tomarRemedio } from "../requests/requests";
import {  useEffect, useState } from "react";
import Lista from '../components/listRemedios'
import { getAllRemedios } from "../requests/requests";
export default function Home(){
    const [remedio, setRemedio] = useState()
    const [remedios, setRemedios] = useState([])
    let _date = new Date()
            
    let day = _date.getDate()
    let month = _date.getMonth()
    let year = _date.getFullYear()
    _date = `${year}-${month+1}-${day}`
    
    const [date, setDate] = useState(_date)
    useEffect(()=>{
        async function get(){
            
            const resp = await getTodayRemedio(date)
            if (resp.data){
                setRemedio(resp.data)
                
            }

            const remediosResp = await getAllRemedios()

            if (remediosResp.data){
                setRemedios(remediosResp.data)
            }
        }
        
        get()
    },[])

    
    async function tomarRemedioHandler(){
        const resp = await tomarRemedio(remedio.id, remedio.data)
        if (resp.data){
            console.log(resp.data)
            setRemedio(resp.data)

            const remediosResp = await getAllRemedios()

            if (remediosResp.data){
                setRemedios(remediosResp.data)
            }
        }
    }



    return(
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                {remedio && remedio.tomado
                ?<Text style={styles.remedioTomado}>Você já tomou seu remédio hoje. Volte amanhã, seu careca maldito!</Text>
                :<TouchableOpacity onPress={tomarRemedioHandler} style={styles.button}>
                    <Text style={styles.buttonText}>Tomei o Remédio</Text>
                </TouchableOpacity>
                
                }

                

                <View style={styles.listaWrapper}>
                    <Lista data={remedios}/>                      
                </View>
               
            </View>

   
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-evenly',        
        height: '100%',
        width: '100%',

    },

    subcontainer:{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-evenly'
    },

    button: {
        backgroundColor: '#0e5e1a',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '60%',
        alignSelf: 'center',
        
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },

      remedioTomado:{
        textAlign: 'center',
        padding: 50
      },
      listaWrapper:{
        height: '50%',

      }
})