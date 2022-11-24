import styles from '../styles/components/footer.module.css'

export function Footer () { 
    return (
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}>
                Feito com amor por Grazielle Moura-Projeto guiado
            </p>
        </footer>
    )
}