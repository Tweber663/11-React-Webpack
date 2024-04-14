import styles from './favoriteEmpty.modue.scss'

const FavoriteEmpty = () => {

    return (
        <section className={styles.main}>
            <h1 className={styles.title}> NOTHING HERE </h1> 
            <img  src={`${process.env.PUBLIC_URL}/img/meme.png`} alt="No memes here" />
        </section>
    )
}

export default FavoriteEmpty;