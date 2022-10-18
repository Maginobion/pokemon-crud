import styles from "./pokeFinder.module.css";

const PokeFinder=({
    text, 
    handleChange
}:{
    text:string, 
    handleChange:(a:any)=>void
})=>{
    return(
        <div className={styles.finder}>
            <span className={styles.icon}></span>
            <input
                className={styles.finderInput}
                placeholder="Buscar" 
                value={text} 
                onChange={handleChange}
            />
        </div>
    )
}

export default PokeFinder;