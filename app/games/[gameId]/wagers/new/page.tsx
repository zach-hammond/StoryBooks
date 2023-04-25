export default function Page({params,}: { params: { gameId: string } }) {
    return (
        <form action="/api/wagers" method="post">
            <h1>New Wager</h1>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input type="text" id="amount" name="amount"/>
                <input type="hidden" id="gameId" name="gameId" value={params.gameId}/>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    )
}