import searchBarIcon from '../assets/img/searchBarIcon.png'

export function MainSearchBar({value, onChange}) {
    return (
        <div>
            <button>
                <img src={searchBarIcon} alt="Search" />
            </button>
            <input placeholder='Search a TV show you may like' type="text" value={value} onChange={onChange} />
        </div>
    )
}