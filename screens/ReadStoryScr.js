import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScr extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.story}> STORY HUB </Text>
                <Text style={styles.header}> Here are two stories for you to read! </Text>
                <Text style={styles.head}>A Wise Man</Text>
                <Text style={styles.storyIn}> 
                People have been coming to the wise man, complaining about the same problems every time.
                One day he told them a joke and everyone roared in laughter.
                After a couple of minutes, he told them the same joke and only a few of them smiled.
                When he told the same joke for the third time no one laughed anymore.
                The wise man smiled and said:
                “You can’t laugh at the same joke over and over. So why are you always crying about the same problem?”
                

                 </Text>
                 <Text style={styles.moral}>Moral of the story:
                Worrying won’t solve your problems, it’ll just waste your time and energy.</Text>

                <Text style={styles.head}>Count Wisely</Text>
                <Text style={styles.storyIn}> 
                One day, king Akbar asked a question in his court that left everyone in the courtroom puzzled. 
                As they all tried to figure out the answer, Birbal walked in and asked what the matter was. 
                They repeated the question to him.The question was, “How many crows are there in the city?”
                Birbal immediately smiled and went up to Akbar. He announced the answer;
                he said there were twenty-one thousand, five hundred and twenty-three crows in the city. 
                When asked how he knew the answer, Birbal replied, “Ask your men to count the number of crows. 
                If there are more, then the relatives of the crows must be visiting them from nearby cities. 
                If there are fewer, then the crows from our city must be visiting their relatives who live outside the 
                city.” Pleased with the answer, Akbar presented Birbal with a ruby and pearl chain.               

                 </Text>
                 <Text style={styles.moral}>Moral of the story:
                 Having an explanation for your answer is just as important as having an answer.</Text>
             </View>
                
        )
    }
}

const styles = StyleSheet.create({
    Story:{
        marginTop:45,
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center'
    },
    story:{
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor: 'pink',
        fontSize: 45,
        fontWeight: 'bold',
        fontFamily: 'times'
    },
    moral:{
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: 'times'
    },
    storyIn:{
        textAlign: 'left',
        fontSize: 20,
        margin: 15
    },
    head:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'times',
        margin: 25,
        marginBottom:-15,
        color: 'blue'
    },
    header:{
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        backgroundColor: 'aqua',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'times'
    }
})