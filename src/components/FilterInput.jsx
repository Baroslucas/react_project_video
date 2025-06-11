export function FilterInput({value, onChange}) {
    return (
        <div>
            <input type="text" placeholder="Filter shows" value={value} onChange={onChange} />
        </div>
    )
}