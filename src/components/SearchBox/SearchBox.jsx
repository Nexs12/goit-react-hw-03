import css from "./SearchBox.module.css"


export default function SearchBox() { 

    return (
         <div className={css.searchForm}>
      <label>Find contacts by name</label>
            <input type="text"/>
    </div>
    );
}