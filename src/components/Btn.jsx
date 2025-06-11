export function Btn() {
    return <button>
        {Icon && (
            <img src={iconSrc} alt={alt} className="" /> 
        )}
        <span>{label}</span>
    </button>
}