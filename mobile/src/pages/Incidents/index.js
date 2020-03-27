import React , {useEffect, useState}  from "react";
import { View , FlatList,  Text,  Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import logoImg from  "../../assets/logo.png"
import style from "./styles";
import api from "../../services/api"


export default function Incidents(){
    const[incidentsList, setIncidentsList]= useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage]= useState(1);
    const [loading, setLoading]=useState(false);


    const navigation = useNavigation();
    useEffect(()=>{
        loadIncidents();
    }, []);
    
    
    async function loadIncidents(){
        if(loading){
            return;
        }
        if(total>0 && incidentsList.length === 0){
            return;
        }
        setLoading(true);

        const response = await api.get('incidents', {
            params: { page }
        });

        setIncidentsList([...incidentsList, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    } 
           

   function navigateToDetail(incident){
        navigation.navigate('Details', { incident })
    }

return(
        <View style={style.container} >
            <View  style={style.header}>
                <Image  source={logoImg}/>
                <Text style={style.headerText}>
                Total: <Text style={style.headerTextBold} > {total} casos </Text>
                </Text>
            </View>    

                <Text style={style.title}> Bem-vindo! </Text>       
                <Text style={style.description}> Escolha um dos casos abaixo e salve o dia. </Text>   

            <FlatList 
                data={incidentsList}
                style={style.incidentList}
                keyExtractor={incident => String(incident) }
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item: incident })=>(
                <View style={style.incident}>  
                    <Text style={style.incidentProperty}>ONG:</Text>
                    <Text style={style.incidentValue}>{incident.name}</Text>

                    <Text style={style.incidentProperty}>CASO</Text>
                    <Text style={style.incidentValue}>{incident.title}</Text>

                    <Text style={style.incidentProperty}>VALOR</Text>
                    <Text style={style.incidentValue}>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'})
                                                           .format(incident.value)}</Text>

                    <TouchableOpacity style={style.detailsButton} onPress={ ()=> navigateToDetail(incident) }>
                        <Text style={style.detailsButtonText} >Ver mais detalhes</Text>
                        <Feather name="arrow-right"  size={16} color="#e02041"/>    
                    </TouchableOpacity>    
                </View>
                )}
            />        
        </View>

    );
}
