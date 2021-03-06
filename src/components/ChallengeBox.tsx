import { useContext } from 'react';
import styles from '../styles/components/ChallengeBox.module.css'
import {ChallengesContext} from '../contexts/ChallengesContext'

export function ChallengeBox(){
    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);


    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="aa"/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                        type='button'
                        className={styles.challengeFailedButton}
                        onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button
                        type='button'
                        className={styles.challengeSuccededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio </strong>
                <p>
                    <img src="icons/level-up.svg" alt="level-up"/>
                    Avance de level completando os desafios
                </p>
                </div>
            )}
        </div>
    )
}