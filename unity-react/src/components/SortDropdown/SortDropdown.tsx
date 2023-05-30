import "./SortDropdown.css";

export const SortDropdown = ({ sortingOptions }: { sortingOptions: string[] }) => (
  <div className='sort-by'>
    <label>Sort by:</label>
    <select>
      {sortingOptions.map((option, index) => (
        <option key={`Sorting option ${index}`} value={option}>{option}</option>
      ))};
    </select>
  </div>
);