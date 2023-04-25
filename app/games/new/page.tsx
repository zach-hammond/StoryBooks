export default function Page() {
    return (
        <form action="/api/games" method="post">
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title"/>
            </div>
            <div>
                <label htmlFor="privateGame">Private game:</label>
                <input type="checkbox" id="privateGame" name="privateGame"/>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    )
}