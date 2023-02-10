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

}