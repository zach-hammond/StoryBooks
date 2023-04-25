export default function Page({params,}: { params: { gameId: string } }) {
    return (
        <form action="/api/wagers" method="post">
            <h1>New Wager</h1>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input type="text" id="amount" name="amount"/>
            </div>
            <div>
                <label htmlFor="outcome">Outcome:</label>
                <input type="checkbox" id="outcome" name="outcome"/>
            </div>
            <div>
                <input type="hidden" id="gameId" name="gameId" value={params.gameId}/>
                <button type="submit">Create</button>
            </div>
        </form>
    )
}