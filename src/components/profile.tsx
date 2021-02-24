import styles from '../styles/components/Profile.module.css'


export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/KusogeKing.png" alt="Pedro Henrique"/>
            <div>
                <strong>Pedro Henrique Veloso</strong>
                
                <p>
                <img src="icons/level.svg" alt="level up"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}