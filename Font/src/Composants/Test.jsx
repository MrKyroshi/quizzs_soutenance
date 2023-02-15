import React from 'react'; 
import { useState, useEffect } from 'react'; 
import { Container,Row,Col,Card,Button } from 'react-bootstrap';



const QuizzPop = () =>
{
    const [currentQuestion, setCurrentQuestion]= useState(0);
    const [score, setScore]= useState(0);
    const [answers, setAnswers]= useState([]);
    const [isFinished, setIsFinished]= useState(false);

    
    //Question sur la pop culture
    const questions = [
    {
        question: "Quel est le nom du chien de Samy ?",
        options: ["Scooby Doo", "Max", "Rintintin", "Milou"],
        correctAnswers: "Scooby Doo",
        points: 10
    },
    {
        question: "Quel célèbre flic homme-robot a été adapté en comics par Frank Miller ?",
        options: ["Terminator", "Malcom", "Bender", "Robocop"],
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
        options: ["Jurassic Park", "Indiana Jones", "Star Wars", "Les dents de la mer"],
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
        question: "Quel est le premier grand succès des Spice Girls ?",
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
    }    
    ];
    const handleAnswer = (answer) => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setAnswers([...answers, answer]);
        } else {
          setIsFinished(true);
          setAnswers([...answers, answer]);
        }
      };

    const handleReset =() =>{
        setCurrentQuestion(0);
        setScore(0);
        setAnswers([]);
        setIsFinished(false);
    };

    useEffect(()=>{
        let score = 0;
        answers.forEach((options,index)=>{
            if(options === questions[index].correctAnswers) {score +=10;}
        });
        setScore(score);
    },[answers]);

    // Ajouter condition isFinished
    if(isFinished){
        return(
            <Container  >
                <Row >
                    <Col>
                    <Card  >
                        <Card.Body>
                            <h1>Quizz Pop Culture</h1>
                            <h2> Vous avez terminé le quizz!!!Votre score est de {score}</h2>
                        <div className='commentaire'>
                            
                            {{0 : <div><h3>T'es harcil-nul</h3> && <img src ="https://www.gifimili.com/gif/2018/02/tristesse.gif" alt='Tristesse'/></div> ,
                            10: <div><h3>T'es nul</h3> && <img src ="https://media.tenor.com/u3KAPOKEolAAAAAi/uka-uka-i%C3%A5s2020.gif" alt='Tristesse'/></div> ,
                            20: <div> <h3>T'es nul</h3> && <img src ="https://media.tenor.com/u3KAPOKEolAAAAAi/uka-uka-i%C3%A5s2020.gif" alt='Tristesse'/></div> ,
                            30: <div> <h3>T'as aucune culture pop </h3> && <img src="https://media.tenor.com/fNSfyXu6TMQAAAAd/courage-courageous.gif" alt='danse swift'/></div> ,
                            40: <div>  <h3>T'as aucune  culture pop mais c'est pas foutu</h3> && <img src="https://media.tenor.com/fNSfyXu6TMQAAAAd/courage-courageous.gif" alt='danse swift'/></div> ,
                            50: <div>  <h3>Wakanda t'encourage</h3> && <img src="https://tenor.com/fr/search/wkanda-gifs" alt='waka waka '/></div> ,
                            60: <div>  <h3>Wakanda t'encourage</h3> && <img src="https://tenor.com/fr/search/wkanda-gifs" alt='waka waka '/></div> ,
                            70: <div>  <h3>Tu est presque</h3> && <img src="https://tenor.com/fr/view/dhalsim-street-fighter-alpha-dancing-victory-gif-17716797" alt='dhalsim'/> </div> ,
                            80: <div>  <h3>Tu est presque</h3> && <img src="https://tenor.com/fr/view/dhalsim-street-fighter-alpha-dancing-victory-gif-17716797" alt='dhalsim'/> </div> ,
                            90: <div>  <h3>Excellent!!!</h3> && <img src="https://media.tenor.com/-_CuKtWc3-EAAAAC/mortal-kombat-mortal-kombat11.gif" alt='kombat'/> </div> ,
                            100: <div> <h3>Fawless Victory !!!</h3> && <img src="https://media.tenor.com/-_CuKtWc3-EAAAAC/mortal-kombat-mortal-kombat11.gif" alt='kombat'/></div> ,
                             
                            }[score]
                            }
                        </div>
                        <Button style={{color:'aquamarine' ,display:'block',alignItems:'center'}} onClick={handleReset}>Recommencer</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        );
        
    }
    return(
        <Container >
            <Row>
                <Col>
                <Card>
                    <Card.Body style={{textAlign:'center'}}>
                        <h1>Quizz Pop Culture</h1>
                        <h2>{questions[currentQuestion].question}</h2>
                        {questions[currentQuestion].options.map((option,index)=>(<Button style={{color:'aquamarine' ,margin:'1em' }} key={index} onClick={() => handleAnswer(option)}>{option}</Button>    
                        ))}
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>

    );

};

export default QuizzPop;
