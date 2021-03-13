import './index.css';
import searchIcon from '../../assets/search.svg';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search_bar">
      <img src={searchIcon} alt="" className="search_icon" />
      <input
        type="text"
        name=""
        id=""
        className="search_input"
        placeholder="Tìm ảnh gif..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
