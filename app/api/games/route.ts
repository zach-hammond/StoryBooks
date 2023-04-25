import {NextRequest} from "next/server";
import {redirect} from "next/navigation";
import GameService from "@/lib/GameService";

export async function POST(request: NextRequest) {
    const form = await request.formData();
    const userId = 1 // TODO: get from session
    const title = form.get('title');
    const privateGame = form.get('privateGame');
    await GameService.addGame(title, !!privateGame, userId);
    redirect('/games');
}
