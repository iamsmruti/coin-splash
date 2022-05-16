import styles from './Searchbar.module.css'

const Searchbar = ({onChange}) => {
    return (
        <div className={styles.searchbar}>
            <input className={styles.search_input} type="text" onChange={onChange}/>
        </div>
    );
}
 
export default Searchbar;