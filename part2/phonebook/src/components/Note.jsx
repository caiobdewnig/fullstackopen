export default function Note ({message, className}) {
    if (message === null) {
        return null
    }
    return (
        <div className={className}>
            {message}
        </div>
    )
}