import './srch-box.styles.css'
const SearchBox = ({placeHolder,onChangeHandler}) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    </div>
  );
}


export default SearchBox;
