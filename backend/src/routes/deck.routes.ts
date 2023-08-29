import {
	getDeck,
	postDeck,
	putDeck,
	deleteDeck,
} from '../controllers/deck.controller';
import { RouterGenerator } from '../helpers/router.helper';

const routes = RouterGenerator.resourceApi({
	path: '/decks',
	functions: [getDeck, postDeck, putDeck, deleteDeck],
});

export default routes;
