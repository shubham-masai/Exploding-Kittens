import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { catCard, defuseCardImg, explodecard, shuffleCard, cardImage } from "../assets";
import { addDefuceCard, removeDefuseCard, setOpenCard, useDefuseCard, userDeckUpdate } from "../redux/Card/action";
import { handleScore } from "../redux/User/action";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";

const Game = () => {

    const usernameData = localStorage.getItem("ExplodingUsername");
    const scoreData = localStorage.getItem("ExplodingScore");
    const { defuseCards, openedCard, deck, username, score } = useSelector((store) => {
        return {
            defuseCards: store.cardReducer.defuseCards,
            openedCard: store.cardReducer.openedCard,
            deck: store.cardReducer.deck,
            username: store.userReducer.username || usernameData,
            score: store.userReducer.score || scoreData
        }
    }, shallowEqual);

    const [isShuffling, setIsShuffling] = useState(false);
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const cards = ["CAT", "DEFUSE", "SHUFFLE", "EXPLODE"];

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {
        gameStart()
    }, [scoreData])

    const handleLogout = () => {
        localStorage.clear();
        Navigate("/login");
    }
    const restartGame = () => {
        dispatch(setOpenCard(null));
        dispatch(removeDefuseCard());
        const randomCards = generateRandomDeck()
        dispatch(userDeckUpdate(randomCards));
    }

    const generateRandomDeck = () => {
        let randomDeck = new Array(5).fill(0);
        for (let i = 0; i < 5; i++) {
            randomDeck[i] = cards[Math.floor(Math.random() * 4)];
        }
        let shuffleCount = randomDeck.filter(card => card === "SHUFFLE").length;
        if (shuffleCount > 1) {
            randomDeck = randomDeck.map(card => card === "SHUFFLE" && shuffleCount-- > 1 ? "CAT" : card);
        }
        console.log(randomDeck);
        return randomDeck;
    };


    // Show modal with message
    const showModal = (message) => {
        setModalMessage(message);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };



    const showCardImage = () => {
        let AllCards = [...deck];
        let popedCard = AllCards.pop();
        dispatch(setOpenCard(popedCard));
        dispatch(userDeckUpdate(AllCards));
        setIsShuffling(true);
        setTimeout(() => setIsShuffling(false), 500);

        if (popedCard === "SHUFFLE") {
            setTimeout(() => {
                restartGame();
            }, 1000);
        }
        else if (popedCard === "DEFUSE") {
            if (AllCards.length === 0) {
                showModal("you won the game.");
                dispatch(handleScore());
                restartGame();
            }
            else {
                dispatch(addDefuceCard(popedCard));
            }
        }
        else if (popedCard === "EXPLODE") {
            if (defuseCards?.length > 0) {
                dispatch(useDefuseCard());

                if (AllCards.length === 0) {
                    showModal("you won the game.");
                    dispatch(handleScore());
                    restartGame();
                }
            }
            else {
                setTimeout(() => {
                    showModal("you loss the game.");
                    restartGame();
                }, 1000)
            }
        }
        else if (popedCard === "CAT") {
            if (AllCards.length == 0) {
                showModal("you won the game.");
                dispatch(handleScore());
                restartGame();
            }
        }
    }

    const setOpenCardImage = () => {
        switch (openedCard) {
            case "SHUFFLE": return shuffleCard
            case "DEFUSE": return defuseCardImg
            case "CAT": return catCard
            case "EXPLODE": return explodecard
            default: return ""
        }
    }
    const gameStart = async () => {
        const randomCards = generateRandomDeck()
        dispatch(userDeckUpdate(randomCards));
    }
    return (
        <>
            <div className="flex justify-between p-10 relative">
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full absolute top-0 right-0 mt-2 mr-4">Logout</button>
                <div>
                    <h1 className="font-poppins font-semibold text-white mb-2"> {openedCard ? openedCard + " CARD" : "CURRENT CARD"}</h1>
                    <div className="flex justify-center items-center w-[250px] h-[300px] rounded-[20px] overflow-hidden">
                        {openedCard ? (
                            <img
                                src={setOpenCardImage()}
                                alt={openedCard}
                                className="w-full h-full"
                            />
                        ) : (
                            <div className="w-full h-full bg-black-gradient"></div>
                        )}
                    </div>
                </div>

                <div className="mt-5">
                    <h1 className="font-poppins font-semibold  text-[60px] text-white">Hello {username}</h1>
                    <p className="font-poppins  text-[40px] text-dimWhite"> Your Score: {score}</p>
                </div>
                <div>
                    <h2 className="font-poppins font-semibold text-white mb-2">DEFUSE CARDS</h2>
                    <div className="flex w-full relative">
                        {defuseCards.length > 0 ? (
                            defuseCards.map((_, index) => (
                                <div key={index} className="ml-[-140px] w-[200px] h-[250px]">
                                    <img src={defuseCardImg} alt="defuse card" className="w-full h-full" />
                                </div>
                            ))
                        ) : (
                            <div className="w-[250px] h-[300px] bg-black-gradient rounded-[20px]"></div>
                        )}

                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h2 className="font-poppins font-semibold text-white mb-2">All Deck Cards</h2>
                <div className="flex">
                    <div className="flex w-full justify-center relative">
                        {deck.map((_, index) => (
                            <div key={index} className={`ml-[-80px] w-[200px] h-[250px] rounded-[20px] overflow-hidden ${isShuffling ? 'shuffle-animation' : ''}`}>
                                <img src={cardImage} alt="card" onClick={showCardImage} className="w-full h-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {modalVisible && <Modal message={modalMessage} onClose={closeModal} />}
        </>
    );
};

export default Game;