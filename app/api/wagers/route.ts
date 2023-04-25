import {NextRequest} from "next/server";
import {redirect} from "next/navigation";
import GameService from "@/lib/GameService";

export async function POST(request: NextRequest) {
    const form = await request.formData();
    const userId = 1 // TODO: get user from session
    const gameId = parseInt(form.get('gameId'));
    const amount = parseInt(form.get('amount'));
    const outcome = form.get('outcome')
    await GameService.addWager(userId, gameId, amount, !!outcome);
    redirect('/games/' + gameId);
}
