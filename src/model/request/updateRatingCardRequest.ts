import { RatingCard } from '../domain/quote/ratingCard/ratingCard';

export class UpdateRatingCardRequest {
    constructor(public id: number, public ratingCard: RatingCard) {}
}
