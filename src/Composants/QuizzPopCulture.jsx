import React from 'react'; 
import { useState, useEffect } from 'react'; 

const QuizzPop = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [isFinished, setIsFinished] = useState(false)

    // Question sur la pop culture
    const questions = [
        {
            question: "Quel est le nom du chien de Samy ?",
            options: ["Scooby Doo", "Max", "Rintintin", "Milou"],
            correctAnswers: "Scooby Doo",
            points: 10
        },
        {
            question: "Quel célèbre flic homme-robot a été adapté en comics par Frank Miller ?",
            options: ["Terminator, Malcom, Bender, Robocop"],
            correctAnswers: "Robocop",
            points: 10
        },
        {
            question: "Quels personnage ne fait pas partie de l'équipe des Gardiens de la galaxie ?",
            options: ["Star Lord", "Thanos", "Rocket", "Drax"],
            correctAnswers: "Thanos",
            points: 10
        },
        {
            question: "Quel est le film français le plus populaire des années 80 ?",
            options: ["Le grand bleu", "Le père Noël est une ordure", "Le diner de cons", "La boom"],
            correctAnswers: "La boom",
            points: 10
        },
        {
            question: "Quel film Steven Spielberg n’a pas réalisé?",
            options: ["Jurassic Park", "Indiana Jones", "E.T l'extra-terrestre", "Les dents de la mer"],
            correctAnswers: "Star Wars",
            points: 10
        },
        {
            question: "Quel film supposé de Tim Burton n'a pas été réalisé par Tim Burton ?",
            options: ["Batman", "Charlie et la chocolaterie", "La planète des singes", "Edward aux mains d'argent"],
            correctAnswers: "La planète des singes",
            points: 10
        },
        {
            questions: "Quel est le premier grand succès des Spice Girls ?",
            options: ["Wannabe", "Spice up your life", "2 become 1", "Say you'll be there"],
            correctAnswers: "Wannabe",
            points: 10
        },
        {
            question: "Quel est le groupe français le plus célèbre des années 80 ?",
            options: ["Les Rita Mitsouko", "Les Enfoirés", "Les Innocents", "Telephone"],
            correctAnswers: "Telephone",
            points: 10
        },
        {
            question: "Quelle est la plus grande peur de Barracuda dans l’Agence tout risques ?",
            options: ["Les araignées", "bateau", "Les serpents", "L'avion"],
            correctAnswers: "l'avion",
            points: 10
        },
        {
            question: "A qui Elton John a t-il dédié sa chanson 'Candle in the wind' en 1997 ?",
            options: ["A Freddie Mercury", "A Michael Jackson", "A John Lennon", "A Lady Diana"],
            correctAnswers: "A Lady Diana",
            points: 10
        },
    ];

    const handleReset = () => {
        setCurrentQuestion (0);
        setScore(0);
        setAnswers([]);
        setIsFinished(false);
    };

    useEffect(() => {
        let score = 0;
        answers.forEach((answer,index)=>{
            if (answer === questions[index].correctAnswers) {
                score +10;
            }
        });
        setScore(score);
     },[answers]);
   
}
 // Ajouter condition isFinished
 if(isFinite){
    return(
        <Container>
            <Row>
                <Col>
                <Card>
                    <Card.Body>
                        <h1>Quizz Pop Culture</h1>
                        <h2> Vous avez terminé le quizz!!!
                            Votre score est de {score}
                        </h2>
                        <div className='commentaire'>
                            {{0 : <h3>T'es harcil-nul</h3> && <img src ="https://www.gifimili.com/gif/2018/02/tristesse.gif" alt='Tristesse'/>,
                            1: <h3>T'es nul</h3> && <img src ="https://media.tenor.com/u3KAPOKEolAAAAAi/uka-uka-i%C3%A5s2020.gif" alt='Tristesse'/>,
                            2: <h3>T'es nul</h3> && <img src ="https://media.tenor.com/u3KAPOKEolAAAAAi/uka-uka-i%C3%A5s2020.gif" alt='Tristesse'/>,
                            3: <h3>T'as aucune culture pop </h3> && <img src="https://media.tenor.com/fNSfyXu6TMQAAAAd/courage-courageous.gif" alt='danse swift'/>,
                            4: <h3>T'as aucune  culture pop mais c'est pas foutu</h3> && <img src="https://media.tenor.com/fNSfyXu6TMQAAAAd/courage-courageous.gif" alt='danse swift'/>,
                            5: <h3>Wakanda t'encourage</h3> && <img src="https://tenor.com/fr/search/wkanda-gifs" alt='waka waka '/>,
                            6: <h3>Wakanda t'encourage</h3> && <img src="https://tenor.com/fr/search/wkanda-gifs" alt='waka waka '/>,
                            7: <h3>Tu est presque</h3> && <img src="https://tenor.com/fr/view/dhalsim-street-fighter-alpha-dancing-victory-gif-17716797" alt='dhalsim'/>,
                            8: <h3>Tu est presque</h3> && <img src="https://tenor.com/fr/view/dhalsim-street-fighter-alpha-dancing-victory-gif-17716797" alt='dhalsim'/>,
                            9: <h3>Excellent!!!</h3> && <img src="https://media.tenor.com/-_CuKtWc3-EAAAAC/mortal-kombat-mortal-kombat11.gif" alt='kombat'/>,
                            10: <h3>Fawless Victory !!!</h3> && <img src="https://media.tenor.com/-_CuKtWc3-EAAAAC/mortal-kombat-mortal-kombat11.gif" alt='kombat'/>,
                             }},
                             
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
 }
}