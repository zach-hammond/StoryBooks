export default function Page() {
    return (
        <form action="/api/games" method="POST">
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title"/>
            </div>
            <div>
                <label htmlFor="private">Private game:</label>
                <input type="checkbox" id="private" name="private"/>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    )
}