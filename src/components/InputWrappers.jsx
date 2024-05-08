import SearchableDropdown from './SearchableDropdown';
import SearchInput from './SearchInput';

export const SearchInputWrapper = ({ value, onChange }) => {
    return <SearchInput value={value} onChange={onChange} />;
};

export const SearchDropdownWrapper = ({ options, value, onChange }) => {
    return <SearchableDropdown options={options} value={value} onChange={onChange} />;
};
