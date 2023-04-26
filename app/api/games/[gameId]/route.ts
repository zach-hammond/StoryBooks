import {NextRequest} from "next/server";
import GameService from "@/lib/GameService";
import {redirect} from "next/navigation";

export async function POST(request: NextRequest) {
    const form = await request.formData();
    const gameId = parseInt(form.get('gameId'));
    const outcome = form.get('outcome')
    await GameService.closeGame(gameId, !!outcome);
    redirect('/games/' + gameId);
}