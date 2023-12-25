import styles from './page.module.css'

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Frontend{'\n'}
          Developer
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tenetur sed tempora alias ab libero, nobis saepe accusamus quasi voluptates aliquid incidunt amet quae ipsa eum repellat laborum eaque architecto?</p>
      </div>
    </section>
  )
}
